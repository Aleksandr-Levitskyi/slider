const initialSlides = [
    {
        title: 'Forbidden City',
        link: 'https://images.unsplash.com/photo-1674619832612-765003356d05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
    },
    {
        title: 'Forbidden City',
        link: 'https://images.unsplash.com/photo-1674619832612-765003356d05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
    },
    {
        title: 'Forbidden City',
        link: 'https://images.unsplash.com/photo-1674619832612-765003356d05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
    },
    {
        title: 'Forbidden City',
        link: 'https://images.unsplash.com/photo-1674619832612-765003356d05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
    },
    {
        title: 'Forbidden City',
        link: 'https://images.unsplash.com/photo-1674619832612-765003356d05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
    },
    {
        title: 'Forbidden City',
        link: 'https://images.unsplash.com/photo-1674619832612-765003356d05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
    },

]

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
