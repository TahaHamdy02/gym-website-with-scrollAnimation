/*=============== SHOW MENU ===============*/
let navMenu = document.querySelector('.nav__menu'),
    navToggle = document.querySelector('.nav__toggle'),
    navClose = document.querySelector('.nav__close')
    /*==== MENU SHOW ====*/
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}
/*==== MENU HIDDEN ====*/
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
};
/*=============== REMOVE MENU MOBILE ===============*/
let navLink = document.querySelectorAll('.nav__link'),
    linkAction = () => {
        let navMenu = document.querySelector('.nav__menu')
        navMenu.classList.remove('show-menu')
    }
navLink.forEach(l => l.addEventListener('click', linkAction));
/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
    const header = document.querySelector('#header')
    this.scrollY >= 50 ? header.classList.add('bg-header') : header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader);
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*=============== SHOW SCROLL UP ===============*/

const scrollTop = () => {
    const scrollTop = document.querySelector('#scroll-up')
    this.scrollY >= 350 ? scrollTop.classList.add('show-scroll') : scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)
    /*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})
sr.reveal(`.home__data, .footer__container, .footer__group`)
sr.reveal(`.home__img`, { delay: 700, origin: 'bottom' })
sr.reveal(`.logos__img, .program__card, .pricing__card`, { interval: 100 })
sr.reveal(`.choose__img, .calucate__content`, { origin: 'left' })
sr.reveal(`.choose__content, .calucate__img`, { origin: 'right' })
    /*=============== CALCULATE JS ===============*/
const calucateForm = document.querySelector('#calucate__form'),
    calucateCm = document.querySelector('#calucate-cm'),
    calucateKg = document.querySelector('#calucate-kg'),
    calucateMeassage = document.querySelector('#calucate-message');
const calucateBmi = (e) => {
    e.preventDefault();
    if (calucateCm.value === '' || calucateKg.value === '') {
        calucateMeassage.classList.remove('color-gren')
        calucateMeassage.classList.add('color-red')
        calucateMeassage.textContent = 'Fill in the Height and Weight😃👀'
        setTimeout(() => {
            calucateMeassage.textContent = ''
        }, 3000)
    } else {
        const cm = calucateCm.value / 100,
            kg = calucateKg.value,
            bmi = Math.round(kg / (cm * cm))
        if (bmi < 18.5) {
            calucateMeassage.classList.add('color-green')
            calucateMeassage.textContent = `Your BMI is ${bmi} and you are skinny 🙂`
        } else if (bmi < 25) {
            calucateMeassage.classList.add('color-green')
            calucateMeassage.textContent = `Your BMI is ${bmi} and you are healthy 😄`

        } else if (bmi < 30) {
            calucateMeassage.classList.add('color-green')
            calucateMeassage.textContent = `Your BMI is ${bmi} and you are overweight 😐`

        } else if (bmi < 40) {
            calucateMeassage.classList.add('color-green')
            calucateMeassage.textContent = `Your BMI is ${bmi} and you are obese 😮`
        } else {
            calucateMeassage.classList.add('color-green')
            calucateMeassage.textContent = `Your BMI is ${bmi} and you are Extremely Obese 🤐`

        }
        calucateCm.value = ''
        calucateKg.value = ''
        setTimeout(() => {
            calucateMeassage.textContent = ''
        }, 4000);
    }
}
calucateForm.addEventListener('submit', calucateBmi)

/*=============== EMAIL JS ===============*/
const contactForm = document.querySelector('#contact-form'),
    contactMessage = document.querySelector('#contact-message'),
    contactUser = document.querySelector('#contact-user');
const userdata = {
    useremail: contactUser.value
}
const sendEmail = (e) => {
    e.preventDefault();
    if (contactUser.value === '') {
        contactMessage.classList.remove('color-green')
        contactMessage.classList.add('color-red')
        contactMessage.textContent = 'You must enter your email ☝'
        setTimeout(() => {
            contactMessage.textContent = ''
        }, 3000)
    } else {
        // serviceID - templateID - #form - publicKey
        emailjs.sendForm('service_exva4ic', 'template_h3xvrek', '#contact-form', 'Z3akb2Q-Og0My02YD')
            .then(() => {
                contactMessage.classList.add('color-green')
                contactMessage.textContent = 'You registered successfully '
                setTimeout(() => {
                    contactMessage.textContent = ''
                }, 3000)
            }, (error) => {
                contactMessage.textContent = 'OOPS! SOMETHING HAS FAILED...'
            })
        contactUser.value = ''
    }

}
contactForm.addEventListener('submit', sendEmail)