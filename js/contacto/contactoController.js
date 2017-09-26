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
		app.f7.alert("Gracias por tu interes te contactaresmos a la brevedad");
		app.f7.addNotification({

			title: 'Framework7',
        	message: 'This is a simple notification message with title and message'

		});
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