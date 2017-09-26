define(['hbs!js/video/templates/video'], function(template) {
	var $$ = Framework7.$;
	function render(params) {
		console.log('video View Render');
		$('.video-page').html(template({}));		
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