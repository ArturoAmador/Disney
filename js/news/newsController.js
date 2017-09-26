define(["app","js/news/newsView", "js/news/newsModel"], function(app, newsView, news) {
	var bindings = [
	{
		element: '.about',
		event: 'click',
		handler: about,
	}];	

	function about(){
		console.log("about");
	}
	

	function init(query){	
		console.log('news Controller');
		newsView.render({
			bindings: bindings,
			app:app,
		});

	}
	return {
		init: init
	};
});