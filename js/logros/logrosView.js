define(['hbs!js/logros/templates/logros'], function(template) {
	var $$ = Framework7.$;
	function render(params) {
		console.log('logros View Render');
		$('.logros-page').html(template({}));		
		bindEvents(params.bindings);
		
		var app = params.app;
		var methods = params.methods;

		$("#nav_about").removeClass("class_select");
		$("#nav_log").removeClass("class_select");
		$("#nav_home").removeClass("class_select");
		$("#nav_contac").removeClass("class_select");
		$("#nav_news").removeClass("class_select");


		$("#nav_about").addClass("default");
		$("#nav_log").addClass("default");
		$("#nav_home").addClass("default");
		$("#nav_contac").addClass("default");
		$("#nav_news").addClass("default");

		$("#nav_log").addClass("class_select");
		$("#nav_log").removeClass("default");


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