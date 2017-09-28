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
	},
	{
		element: '.acept',
		event: 'click',
		handler: acept,
	}];	

	function acept(){
		app.f7.alert("Thank you for be part of the change");
	}

	function creditCard(){

		if ($("#credit").prop( "checked" )) {
			console.log("Donas por tarjeta de credito");
			$(".fadein").removeClass('hide');
			$(".fadein").show(1000);

		}else if ($("#PayPal").prop( "checked" )){
			console.log("Donas por paypal")
			$(".fadein").hide(1000);
		}else{
			$(".fadein").hide(1000);
		}
	}

	function about(){
		console.log("about");
	}

	function sentinel(e){
		$("#100").removeClass("special_setinel_active");
		$("#200").removeClass("special_setinel_active");
		$("#500").removeClass("special_setinel_active");
		$("#otro").removeClass("special_setinel_active");
		$("#otro_placeholder").removeClass("special_setinel_active");

		$(e.target).addClass("special_setinel_active");


		if ($(e.target).attr('id') === "otro_placeholder" ) {
			$("#otro").addClass("special_setinel_active");
		}

		else if ($(e.target).attr('id') === "otro") {
			$("#otro_placeholder").addClass("special_setinel_active");
		}
		
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