define(['hbs!js/demo/templates/demo'], function(template) {
	var $ = Framework7.$;
	function render(params) {
		console.log('demo View Render');
		$('.demo-page').html(template({}));
		bindEvents(params.bindings);
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