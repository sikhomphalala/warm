

document.addEventListener('DOMContentLoaded', function() {
// Mobile menu functionality would go here
});

document.addEventListener('DOMContentLoaded', function() {
// Product card hover effects
const productCards = document.querySelectorAll('.product-card');
productCards.forEach(card => {
card.addEventListener('mouseenter', () => {
card.classList.add('shadow-xl');
});
card.addEventListener('mouseleave', () => {
card.classList.remove('shadow-xl');
});
});
});
document.addEventListener('DOMContentLoaded', function() {
const emailInput = document.querySelector('input[type="email"]');
const subscribeButton = emailInput.nextElementSibling;
subscribeButton.addEventListener('click', function() {
const email = emailInput.value.trim();
if (email === '') {
alert('Please enter your email address.');
return;
}
if (!isValidEmail(email)) {
alert('Please enter a valid email address.');
return;
}
// Simulate subscription success
alert('Thank you for subscribing to our newsletter!');
emailInput.value = '';
});
function isValidEmail(email) {
const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
return re.test(email);
}
});
