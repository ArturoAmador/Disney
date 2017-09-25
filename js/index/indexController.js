define(["app","js/index/indexView", "js/index/indexModel"], function(app, IndexView, Index) {
	var bindings = [
	{
		element: '.demo',
		event: 'click',
		handler: demo
	}];	

	function demo(){
		console.log("demo");
		
	}

	
	

	function init(query){	
		console.log('Index Controller');
		IndexView.render({
			bindings: bindings,
			app:app,
			methods:methods,
		});

	}
	return {
		init: init
	};
});