$( document ).ready(function() {
    console.log( 'ready!' );
	
	
	var items = $('.grid-container-field .grid-item')
	items.each(function() {
		$(this).html('');
	});
	
	
	var stars = $('.star')
	stars.each(function() {
		$(this).html('&#9734;');
	});
	
	var boxes = $('.box')
	boxes.each(function() {
		$(this).html('&#9744;');
	});
	
	var hearts = $('.heart');
	hearts.each(function() {
		$(this).html('&#10084;');
	});
	
	var bombs = $('.bomb');
	bombs.each(function() {
		$(this).html('&#8855;');
	});
});
