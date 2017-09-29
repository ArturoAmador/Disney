define(['js/index/indexModel','hbs!js/index/templates/index'], function(Index,template) {
	var $$ = Framework7.$;
	function render(params) {
		console.log('Index View Render');
		$$('.index-content').html(template({}));

		
		$("#nav_about").removeClass("class_select");
		$("#nav_log").removeClass("class_select");
		$("#nav_home").removeClass("class_select");
		$("#nav_contac").removeClass("class_select");
		$("#nav_news").removeClass("class_select");

		$("#nav_home").removeClass("default");
		$("#nav_home").addClass("class_select");	
				
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

		console.log($(window).width());

		if ($(window).width() <= 900) {
			console.log("movil");
		}


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