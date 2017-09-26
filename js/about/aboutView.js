define(['hbs!js/about/templates/about'], function(template) {
	var $$ = Framework7.$;
	function render(params) {
		console.log('about View Render');
		$('.about-page').html(template({}));		
		bindEvents(params.bindings);
		
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