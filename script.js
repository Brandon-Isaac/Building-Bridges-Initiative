const signupButton = document.getElementById('signupButton');
const signupFormContainer = document.getElementById('signupFormContainer');

signupButton.addEventListener('click', () => {
    signupFormContainer.style.display = 'flex';
});

signupFormContainer.addEventListener('click', (e) => {
    if (e.target === signupFormContainer) {
        signupFormContainer.style.display = 'none';
    }
});
