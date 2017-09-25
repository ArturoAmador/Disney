define(["app","js/demo/demoView", "js/demo/demoModel"], function(app, demoView, demo) {
	var bindings = [{
		element: '.demo',
		event: 'click',
		handler: demo
	}];

	

	
	function demo()
	{
		console.log('demo');
	}

	function init(query){	
		console.log('Index Controller');
		console.log(demo);
		demoView.render(
		{
			model: demo,
			bindings: bindings
		}
		);

	}
	return {
		init: init
	};
});