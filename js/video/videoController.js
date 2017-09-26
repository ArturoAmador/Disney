define(["app","js/video/videoView", "js/video/videoModel"], function(app, videoView, video) {
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
		console.log('video Controller');
		videoView.render({
			bindings: bindings,
			app:app,
		});

	}
	return {
		init: init
	};
});