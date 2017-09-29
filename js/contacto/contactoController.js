define(["app","js/contacto/contactoView", "js/contacto/contactoModel"], function(app, contactoView, contacto) {
	var bindings = [
	{
		element: '.about',
		event: 'click',
		handler: about,
	},
	{
		element: '.modalAlert',
		event: 'click',
		handler: modalAlert,
	}];	

	function modalAlert(){
		app.f7.alert("Thanks, we will contact you soon.");

		$("#name").val("");
		$("#apellido").val("");
		$("#adress").val("");
		$("#cp").val("");
		$("#mobile").val("");
		$("#mail").val("");
	}

	function about(){
		console.log("about");
	}
	

	function init(query){	
		console.log('contacto Controller');
		contactoView.render({
			bindings: bindings,
			app:app,
		});

	}
	return {
		init: init
	};
});