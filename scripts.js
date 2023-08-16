const burger = document.querySelector('.burger');
const closer = document.querySelector('.close');
const nav = document.querySelector('.header__nav');


// event listener that handles opening and closing of nav by pressing burger and close buttons

document.addEventListener ('click', e => {

    const isThisBurger = e.target === burger;
    const isThisCloser = e.target === closer;

    isThisBurger && nav.setAttribute('data-open', 'true');
    isThisCloser && nav.setAttribute('data-open', 'false');
})


// section slider

const prevBtn = document.querySelector('[data-prev]');
const nextBtn = document.querySelector('[data-next]');
const imgDesktop = document.querySelector('.hero__img--desktop');
const imgMobile = document.querySelector('.hero__img--mobile');
const title = document.querySelector('[data-title]');
const body = document.querySelector('[data-body]');

let i = 0; // index of the section

nextBtn.addEventListener('click', () => {
    const thisIsEnd = i === sections.length - 1;
    if(!thisIsEnd) {
        i++;
        setSection();
    } else {
        i = 0;
        setSection();
    }
})


prevBtn.addEventListener('click', () => {
    const thisIsStart = i === 0;
    if(!thisIsStart) {
        i--;
        setSection();
    } else {
        i = sections.length - 1;
        setSection();
    }
})


const sections = [

    {   
        title: 'Discover innovative ways to decorate',
        text: `We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.`,
        imgDesktop: 'images/desktop-image-hero-1.jpg',
        imgMobile: 'images/mobile-image-hero-1.jpg'
    },

    {
        title: 'We are available all across the globe',
        text: `With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our`,
        imgDesktop: 'images/desktop-image-hero-2.jpg',
        imgMobile: 'images/mobile-image-hero-2.jpg'
    },
    
    {
        title: 'Manufactured with the best materials',
        text: `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office`,
        imgDesktop: 'images/desktop-image-hero-3.jpg',
        imgMobile: 'images/mobile-image-hero-3.jpg'
    }
]

function setSection () {
    imgDesktop.src = sections[i].imgDesktop;
    imgMobile.src = sections[i].imgMobile;
    title.textContent = sections[i].title;
    body.textContent = sections[i].text;
}