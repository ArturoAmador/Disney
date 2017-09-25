define(['js/index/indexModel','hbs!js/index/templates/index'], function(Index,template) {
	var $$ = Framework7.$;
	function render(params) {
		console.log('Index View Render');
		$$('.index-content').html(template({}));		
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