const { invoke } = window.__TAURI__.tauri;

const menuButton = document.querySelector('.menu-icon');
const menuSidebar = document.querySelector('.menu-sidebar');
console.log('This is a regular console.log message');
menuButton.addEventListener('click', () => {

    if(menuSidebar.style.display === 'block') {
        menuSidebar.style.display = 'none';
    }
    else {
        menuSidebar.style.display = 'block';
    }
});

