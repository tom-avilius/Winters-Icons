
// content divs
const aboutContentDiv = document.getElementById('about-content');
const homeContentDiv = document.getElementById('home-content');
const referencesContentDiv = document.getElementById('references-content');
const downloadsContentDiv = document.getElementById('downloads-content');


// navbar items
const aboutNavItem = document.getElementById('about');
const homeNavItem = document.getElementById('home');
const referencesNavItem = document.getElementById('references');
const downloadsNavItem = document.getElementById('downloads');


// adding click event listeners to navbar items
aboutNavItem.addEventListener('click', () => {

    aboutContentDiv.classList.remove('hidden');

    homeContentDiv.classList.add('hidden');
    referencesContentDiv.classList.add('hidden');
    downloadsContentDiv.classList.add('hidden');
});

homeNavItem.addEventListener('click', () => {

    homeContentDiv.classList.remove('hidden');

    aboutContentDiv.classList.add('hidden');
    referencesContentDiv.classList.add('hidden');
    downloadsContentDiv.classList.add('hidden');
});

referencesNavItem.addEventListener('click', () => {

    referencesContentDiv.classList.remove('hidden');

    aboutContentDiv.classList.add('hidden');
    homeContentDiv.classList.add('hidden');
    downloadsContentDiv.classList.add('hidden');
})

downloadsNavItem.addEventListener('click', () => {

    downloadsContentDiv.classList.remove('hidden');

    aboutContentDiv.classList.add('hidden');
    homeContentDiv.classList.add('hidden');
    referencesContentDiv.classList.add('hidden');
});
