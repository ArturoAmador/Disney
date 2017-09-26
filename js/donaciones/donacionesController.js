define(["app","js/donaciones/donacionesView", "js/donaciones/donacionesModel"], function(app, donacionesView, donaciones) {
	var bindings = [
	{
		element: '.about',
		event: 'click',
		handler: about,
	},
	{
		element: '.sentinel',
		event: 'click',
		handler: sentinel,
	},
	{
		element: '.creditCard',
		event: 'click',
		handler: creditCard,
	}];	

	function creditCard(){

		if ($("#credit").prop( "checked" )) {
			console.log("Donas por tarjeta de credito");
			$(".fadein").removeClass('hide');
			$(".fadein").show(1000);

		}else if ($("#PayPal").prop( "checked" )){
			console.log("Donas por paypal")
			$(".fadein").hide(1000);
		}
	}

	function about(){
		console.log("about");
	}

	function sentinel(e){
		$("#100").removeClass("active");
		$("#200").removeClass("active");
		$("#500").removeClass("active");
		$("#otro").removeClass("active");

		$(e.target).addClass("active");
		
	}
	

	function init(query){	
		console.log('donaciones Controller');
		donacionesView.render({
			bindings: bindings,
			app:app,
		});

	}
	return {
		init: init
	};
});