
// getting html elements
const introContent = document.getElementById('intro-div');
const allowedContent = document.getElementById('allowed-div');
const introButton = document.getElementById('intro');
const allowedButton = document.getElementById('allowed');

// adding click behaviour to navbar
introButton.addEventListener('click', () => {

    introContent.classList.remove('hidden');

    allowedContent.classList.add('hidden');
});

allowedButton.addEventListener('click', () => {

    allowedContent.classList.remove('hidden');

    introContent.classList.add('hidden');
})