define(['hbs!js/about/templates/about'], function(template) {
	var $$ = Framework7.$;
	function render(params) {
		console.log('about View Render');
		$('.about-page').html(template({}));		
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

		$("#nav_about").addClass("class_select");
		$("#nav_about").removeClass("default");


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