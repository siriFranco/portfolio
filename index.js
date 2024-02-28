document.querySelectorAll('.card').forEach(card => {
    const img = card.querySelector('img');
    const alt = img.getAttribute('alt');
    card.setAttribute('data-title', alt);
});