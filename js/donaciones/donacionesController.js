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
	}];	

	function about(){
		console.log("about");
	}

	function sentinel(e){
		$("#100").removeClass("active");
		$("#200").removeClass("active");
		$("#500").removeClass("active");
		$("#otro").removeClass("active");

		$(e.target).addClass("active");
		console.log(e);
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