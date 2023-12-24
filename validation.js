$(document).ready(function() {
		
	$('.grid-container-field .grid-item').click(function() {
		if ($(this).html() === 'X') {
			if (confirm('Bist du sicher dass du das X entfernen willst?')) {
				$(this).empty();
			}
		} else if ($(this).html() === '') {
			console.log('set X');
			$(this).html('X');
		} else if (($(this).hasClass('star') || $(this).hasClass('box'))) {
			$(this).html('X');
		}
	});
	
	registerAllRowFinished();
	
	$('.heartboost').click(function() {
		$(this).css('color', 'red');
		$(this).attr('data-value', 1);
	});
	
	
});

function registerRowFinished(className, column, pointsFirst, pointsSecond, scoreClass) {
	$(className).click(function() {
		var rows = $(className);
		var rowFinished = true;
		
		for(var i = 0; i < rows.length; i++){
			if ($(rows[i]).html() !== 'X') rowFinished = false;
		}
		
		if (rowFinished) {
			var score = 0;
			if (confirm(column + ' fertig! Bist du als erstes fertig geworden? Wenn ja dann klicke auf OK, sonst auf Cancel')) {
				score = pointsFirst;
			} else {
				score = pointsSecond;
			}
			$(scoreClass).attr('data-value', score);
			$(scoreClass).attr('data-heart', calculateHeart());
			
			calculateScore('.aoscoremaster', '.aoscore');
			calculateScore('.pvscoremaster', '.pvscore');
			calculateScore('.colorscoremaster', '.colorscore');
			calculateHeartScore();
		}
		calculateStars();
	})
}

function calculateScore(masterClass, childrenClass) {
	var children = $(childrenClass);
	var score = 0;
	var colors = 0;
	for(var i = 0; i < children.length; i++){
		var value = parseInt($(children[i]).attr('data-value'));
		score += value;
		if (childrenClass === '.colorscore' && value > 0) {
			colors ++;
		}
	}
	$(masterClass).text(score);
	if (colors > 1) {
		alert('Das Spiel ist vorbei, du hast 2 Farben vollendet!');
	}
}

function calculateStars() {
	var stars = $('.star');
	var score = 0
	for(var i = 0; i < stars.length; i++){
		if ($(stars[i]).text() !== 'X') {
			score -= 2
		}
	}
	$('.starscoremaster').text(score);
}

function calculateHeart() {
	var hearts = $('.heartboost');
	var counter = 0;
	for(var i = 0; i < hearts.length; i++){
		counter += parseInt($(hearts[i]).attr('data-value'));
	}
	return counter;
}

function calculateHeartScore() {
	var aoscores = $('.aoscore');
	var counter = 0;
	for(var i = 0; i < aoscores.length; i++){
		counter += parseInt($(aoscores[i]).attr('data-heart'));
	}
	$('.heartscoremaster').text(counter);
}

function registerAllRowFinished() {
	//colors
	registerRowFinished('.yellow', 'Gelb', 5, 3, '.yellowscore');
	registerRowFinished('.green', 'Green', 5, 3, '.greenscore');
	registerRowFinished('.pink', 'Rosa', 5, 3, '.pinkscore');
	registerRowFinished('.orange', 'Orange', 5, 3, '.orangescore');
	registerRowFinished('.blue', 'Blau', 5, 3, '.bluescore');
	
	//A-O
	registerRowFinished('.a', 'A', 5, 3, '.ascore');
	registerRowFinished('.b', 'B', 3, 2, '.bscore');
	registerRowFinished('.c', 'C', 3, 2, '.cscore');
	registerRowFinished('.d', 'D', 3, 2, '.dscore');
	registerRowFinished('.e', 'E', 2, 1, '.escore');
	registerRowFinished('.f', 'F', 2, 1, '.fscore');
	registerRowFinished('.g', 'G', 2, 1, '.gscore');
	registerRowFinished('.h', 'H', 2, 0, '.hscore');
	registerRowFinished('.i', 'I', 2, 1, '.iscore');
	registerRowFinished('.j', 'J', 2, 1, '.jscore');
	registerRowFinished('.k', 'K', 2, 1, '.kscore');
	registerRowFinished('.l', 'L', 3, 2, '.lscore');
	registerRowFinished('.m', 'M', 3, 2, '.mscore');
	registerRowFinished('.n', 'N', 3, 2, '.nscore');
	registerRowFinished('.o', 'O', 5, 3, '.oscore');
	
	//P-V
	registerRowFinished('.p', 'P', 5, 5, '.pscore');
	registerRowFinished('.q', 'Q', 5, 5, '.qscore');
	registerRowFinished('.r', 'R', 5, 5, '.rscore');
	registerRowFinished('.s', 'S', 5, 5, '.sscore');
	registerRowFinished('.t', 'T', 5, 5, '.tscore');
	registerRowFinished('.u', 'U', 5, 5, '.uscore');
	registerRowFinished('.v', 'V', 5, 5, '.vscore');
}