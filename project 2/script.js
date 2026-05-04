const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', function () {
    navLinks.classList.toggle('active');
    hamburger.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
});


const revealElements = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.15 });

revealElements.forEach(function (el) {
    observer.observe(el);
});

const themeToggle = document.getElementById('themeToggle');

themeToggle.addEventListener('click', function () {
    document.body.classList.toggle('is-light');

    if (document.body.classList.contains('is-light')) {
        themeToggle.textContent = '☀️';
    } else {
        themeToggle.textContent = '🌙';
    }
});

const faqItems = document.querySelectorAll('.js-faq');
faqItems.forEach(function (item) {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', function () {
        faqItems.forEach(function (i) {
            i.classList.remove('is-open');
        });

        item.classList.toggle('is-open');
    });

})

const submitBtn = document.getElementById('submitBtn');

const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const messageError = document.getElementById('messageError');

const successMsg = document.getElementById('successMsg');

submitBtn.addEventListener('click', function () {
    nameError.classList.remove('is-visible');
    emailError.classList.remove('is-visible');
    messageError.classList.remove('is-visible');
    nameInput.classList.remove('is-visible');
    emailInput.classList.remove('is-visible');
    messageInput.classList.remove('is-visible');

    let isValid = true;

    if (nameInput.value.trim() === '') {
        nameError.classList.add('is-visible');
        nameInput.classList.add('is-error');
        isValid = false;
    }

    if (emailInput.value.trim() === '') {
        emailError.classList.add('is-visible');
        emailInput.classList.add('is-error');
        isValid = false;
    }

    if (messageInput.value.trim() === '') {
        messageError.classList.add('is-visible');
        messageInput.classList.add('is-error');
        isValid = false;
    }

    if (isValid) {
        successMsg.classList.add('is-visible');
    }

});
