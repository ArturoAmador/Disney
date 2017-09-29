define(['hbs!js/donaciones/templates/donaciones'], function(template) {
	var $$ = Framework7.$;
	function render(params) {
		console.log('donaciones View Render');
		$('.donaciones-page').html(template({}));

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

		bindEvents(params.bindings);
		
		var app = params.app;
		var methods = params.methods;

		app.f7.swiper('.swiper-1', {
			  pagination:'.swiper-1 .swiper-pagination',
			  spaceBetween: 50,
			  paginationClickable: true,
			  nextButton: '.swiper-button-next',
  			  prevButton: '.swiper-button-prev',
		})


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