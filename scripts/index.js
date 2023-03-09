const slideInfo = [
    {
        title: '',
        link: '',
    },
    {
        title: '',
        link: '',
    },
    {
        title: '',
        link: '',
    },
    {
        title: '',
        link: '',
    },
    {
        title: '',
        link: '',
    },
    {
        title: '',
        link: '',
    },

]

const cardArray = Array.from(document.querySelectorAll('.card'));

function renderSlide() {

}

const removeClassSlide = () => {
    cardArray.forEach((item) => {
        item.classList.remove('card_is-active');
    });
}

cardArray.forEach((item) => {
    item.addEventListener('click', () => {
        removeClassSlide();
        item.classList.add('card_is-active');
    });
});


