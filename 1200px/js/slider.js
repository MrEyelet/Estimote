$(document).ready(function(){

	$('.arrows-right').on('click', function(){
		var currentActiveItem = $('.shown');
		var nextActiveItem = currentActiveItem.next();

		if(nextActiveItem.length == 0){
			nextActiveItem = $('.slide:first-child, .slider .slide:first-child');
      		console.log(nextActiveItem)
		}

		currentActiveItem.removeClass('shown').addClass('hidden');
		nextActiveItem.addClass('shown').removeClass('hidden');
		

	});

	$('.arrows-left').on('click', function(){

		var currentActiveItem = $('.shown');
		var nextActiveItem = currentActiveItem.prev();

		if(nextActiveItem.length == 0) {
			nextActiveItem = $('.slide:last-child, .slider .slide:last-child');
		}

		currentActiveItem.removeClass('shown').addClass('hidden');
		nextActiveItem.addClass('shown').removeClass('hidden');
	
	});

});
