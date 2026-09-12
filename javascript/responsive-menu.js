// Mobile Hamburger Menu Toggle
const hamburgerBtn = document.getElementById('hamburger-btn');
const mobileNavMenu = document.getElementById('mobile-nav-menu');

if (hamburgerBtn && mobileNavMenu) {
    hamburgerBtn.addEventListener('click', function () {
        mobileNavMenu.classList.toggle('open');
    });

    document.querySelectorAll('#mobile-nav-menu a').forEach(function (link) {
        link.addEventListener('click', function () {
            mobileNavMenu.classList.remove('open');
        });
    });
}