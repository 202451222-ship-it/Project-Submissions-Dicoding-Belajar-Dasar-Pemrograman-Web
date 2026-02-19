const hamburgerButton = document.querySelector('#hamburger');
const drawerMenu = document.querySelector('#drawer');

hamburgerButton.addEventListener('click', function(event) {
    drawerMenu.classList.toggle('open');
    event.stopPropagation();
});

document.body.addEventListener('click', function(event) {
    if (!hamburgerButton.contains(event.target) && !drawerMenu.contains(event.target)) {
        drawerMenu.classList.remove('open');
    }
});
