jQuery(document).ready(function($) {
	let currentIndex = 0;
	const cards = $('.bcs-card');
	const totalCards = cards.length;

	function showNextCard() {
		cards.removeClass('active');
		currentIndex = (currentIndex + 1) % totalCards;
		$(cards[currentIndex]).addClass('active');
	}

	if (totalCards > 0) {
		$(cards[currentIndex]).addClass('active');
		setInterval(showNextCard, 5000); // Change card every 5 seconds
	}
});
