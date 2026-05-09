const passwordInput = document.getElementById('password');

passwordInput.addEventListener('input', function () {
    const val = this.value;
    const barFill = document.getElementById('barFill');
    const barLabel = document.getElementById('barLabel');

    let score = 0;

    if (val.length >= 8) score++;
    if (/[A-Z]/.test(val)) score++;
    if (/[0-9]/.test(val)) score++;
    if (/[^A-Za-z0-9]/.test(val)) score++;

    const colors = ['#ef4444', '#f97316', '#eab308', '#22c55e'];
    const labels = ['Weak', 'Fair', 'Good', 'Strong'];

    if (val.length === 0) {
        barFill.style.width = '0%';
        barLabel.textContent = '';
        return;
    }

    barFill.style.width = (score * 25) + '%';
    barFill.style.background = colors[score - 1];
    barLabel.textContent = labels[score - 1];
});

const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirm = document.getElementById('confirm');
const successBox = document.getElementById('successBox');

const form = document.getElementById('registerForm');
form.addEventListener('submit', function (event) {
    event.preventDefault();

    fname.classList.remove('is-error');
    lname.classList.remove('is-error');
    email.classList.remove('is-error');
    password.classList.remove('is-error');
    confirm.classList.remove('is-error');
    document.getElementById('fnameErr').classList.remove('is-visible');
    document.getElementById('lnameErr').classList.remove('is-visible');
    document.getElementById('emailErr').classList.remove('is-visible');
    document.getElementById('passErr').classList.remove('is-visible');
    document.getElementById('confirmErr').classList.remove('is-visible');
    successBox.classList.remove('is-visible');

    let isValid = true;

    if (fname.value.trim() === '') {
        fname.classList.add('is-error');
        document.getElementById('fnameErr').classList.add('is-visible');
        isValid = false;
    }

    if (lname.value.trim() === '') {
        lname.classList.add('is-error');
        document.getElementById('lnameErr').classList.add('is-visible');
        isValid = false;
    }

    // emailRegex yahan declare karo
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
        email.classList.add('is-error');
        document.getElementById('emailErr').classList.add('is-visible');
        isValid = false;
    }

    if (password.value.length < 8 ||
        !/[A-Z]/.test(password.value) ||
        !/[0-9]/.test(password.value)) {
        password.classList.add('is-error');
        document.getElementById('passErr').classList.add('is-visible');
        isValid = false;
    }

    if (confirm.value !== password.value) {
        confirm.classList.add('is-error');
        document.getElementById('confirmErr').classList.add('is-visible');
        isValid = false;
    }

    const terms = document.getElementById('terms');
    if (!terms.checked) {
        isValid = false;
    }

    if (isValid) {
        successBox.classList.add('is-visible');
    }
});