const about = document.querySelector(".about")
const header = document.querySelector(".header")
const logo = document.querySelector(".elixir-logo")
const footerLink = document.querySelector(".footer-link")

const socialLink = Array.from(document.querySelector(".sm-links").children)


/**
 * @example
 * animateStart(logo, 2000, animationFadeIn);
 * @param {Element} el - a DOM element
 * @param {number} startTime - time to start the animation
 * @param {Array} animations - an array containing you animations
 * 
 * animateStart(logo, 2000, animationFadeIn);;
 */

function animateStart(el, startTime, animations = []) {
    el.animate([
        ...animations
    ],
        {
            duration: 1000,
            delay: startTime,
        }
    )
}

// ========== ANIMATIONS ==============

/* 
    if you want change animation 
    make an struct like this below 
    with you animation 
*/

const fadeIn = {
    opacity: 0,
    transform: "scale(1)",
    easing: "ease-in",
}
const fadeOut = {
    opacity: 1,
    transform: "scale(0)",
    easing: "ease-in",
}


const animationFadeIn = [
    fadeOut,
    fadeIn
]

const translateStart = {
    opacity: 0,
    transform: "translate3d(0px, -100px, 0px)",
    easing: "ease-in",
}

const translateEnd = {
    opacity: 1,
    transform: "translate3d(0px, 0px, 0px)",
    easing: "ease-in",
}


const animationTranslate = [
    translateStart,
    translateEnd
]


animateStart(logo, 0, animationTranslate)
animateStart(about, 0, animationTranslate)
animateStart(header, 100, animationTranslate)

socialLink.map((link, idx) => animateStart(link, 0 + idx * 50, animationTranslate))