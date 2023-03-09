//находим шаблон карточки
const slideTemplate = document.querySelector('#card-template');
//находим слайдер, куда будем вставлять слайд
const slideWrapper = document.querySelector('.slider');

const slidesArray = [];

function addClass(slide) {
    slide.classList.add('card_is-active');
};

function removeClass(slide) {
    slide.classList.remove('card_is-active');
}

function createSlide(title, link) {
    const newSlide = slideTemplate.content.cloneNode(true);

    const slide = newSlide.querySelector('.card');

    const slideTitle = newSlide.querySelector('.card__title');
    const slideCover = newSlide.querySelector('.card__cover');

    slideTitle.textContent = title;
    slideCover.setAttribute('src', link);
    slideCover.setAttribute('alt', title);

    return slide;
}

function renderSlide(wrap, title, link) {
    const slide = createSlide(title, link);
    wrap.prepend(slide);

    slidesArray.push(slide);
    slide.addEventListener('click', () => {
        slidesArray.forEach((item) => {
            removeClass(item);
        });
        addClass(slide);
    });
}

initialSlides.forEach((item) => {
    renderSlide(slideWrapper, item.title, item.link);
});
