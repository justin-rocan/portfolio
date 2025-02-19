document.addEventListener('DOMContentLoaded', function() {
    const timelineCards = document.querySelectorAll('.timeline__component--bg');
    
    timelineCards.forEach(card => {
        card.addEventListener('click', function() {
            this.classList.toggle('expanded');
        });
    });
});