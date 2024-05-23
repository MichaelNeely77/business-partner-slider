document.addEventListener('DOMContentLoaded', function() {
	document.addEventListener('click', function(event) {
		if (event.target.classList.contains('remove-card-button')) {
			const cardElement = event.target.closest('.bcs-card');
			if (cardElement) {
				const index = parseInt(cardElement.getAttribute('data-index'), 10);
				const removeEvent = new CustomEvent('bcs:removeCard', { detail: { index: index } });
				document.dispatchEvent(removeEvent);
			}
		}
	});
});
