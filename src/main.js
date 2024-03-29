const { invoke } = window.__TAURI__.tauri;

const menuButton = document.querySelector('.menu-icon');
const menuSidebar = document.querySelector('.menu-sidebar');
const pageContent = document.querySelector('.content');


menuButton.addEventListener('click', () => {

    if(menuSidebar.style.display === 'block') {
        menuSidebar.style.display = 'none';
    }
    else {
        menuSidebar.style.display = 'block';
    }
});
fetchPage('pages/home.html');

pageContent.addEventListener('click', () => {
    if (menuSidebar.style.display === 'block') {
        menuSidebar.style.display = 'none';
    }
});

document.getElementById('timer-item')
        .addEventListener('click', () => {
            fetchPage('/pages/timer.html');
        });

document.getElementById('home-item')
        .addEventListener('click', () => {
            fetchPage('pages/home.html');
        });



function fetchPage(page) {
    fetch(page)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Failed to load content');
            }
            return response.text();
        })
        .then((pageContent) => {
            console.log("Fetching %s page...", page);
            document.querySelector('.content')
                .innerHTML = pageContent;
            console.log("%s obtained.", page);
            menuSidebar.style.display = 'none';
        })
        .catch((error) => {
            console.error('Error loading content:', error);
        });
}
        