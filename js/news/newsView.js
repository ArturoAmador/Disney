define(['hbs!js/news/templates/news'], function(template) {
	var $$ = Framework7.$;
	function render(params) {
		console.log('news View Render');
		$('.news-page').html(template({}));		
		bindEvents(params.bindings);
		$(".timeline").removeClass('timeline')
		var app = params.app;
		var methods = params.methods;


	}

	function bindEvents(bindings) {
		for (var i in bindings) {
			$(bindings[i].element).on(bindings[i].event, bindings[i].handler);
		}
	}
	return {
		render: render
	};
});