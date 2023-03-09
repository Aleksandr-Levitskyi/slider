const cardArray = Array.from(document.querySelectorAll('.card'));

cardArray.forEach((item) => {
    item.addEventListener('click', () => {
        removeClassSlide();
        item.classList.add('card_is-active');
    });
});

const removeClassSlide = () => {
    cardArray.forEach((item) => {
        item.classList.remove('card_is-active');
    });
}