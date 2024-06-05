// Start Header
// Start Nav
let nav = document.getElementById('nav');
activeNavItems(nav);
// End Nav
// Start Contact
let contactBtn = document.getElementById('contact-btn');
let contactDown = document.getElementById('contact-down');
let contactUp = document.getElementById('contact-up');
let contactMenu = document.getElementById('contact-menu');
contactBtn.onclick = function () {
    if (contactMenu.classList.contains('active')) {
        contactMenu.classList.remove('active');
        contactDown.classList.add('active');
    } else {
        contactMenu.classList.add('active');
        contactDown.classList.remove('active');
    }
}
// End Contact
// Start Mobile Header
let toggleMenu = document.getElementById('toggle-menu');
let mobileHeader = document.getElementById('mobile-header');
let closeMenu = document.getElementById('close-menu');
toggleMenu.onclick = function () {
    mobileHeader.classList.remove('disappear');
    mobileHeader.classList.add('appear');
}
closeMenu.onclick = function () {
    mobileHeader.classList.remove('appear');
    mobileHeader.classList.add('disappear');
}
// ِEnd Mobile Header
// Start Mobile Nav
let mobileNav = document.getElementById('mobile-nav');
activeNavItems(mobileNav);
// End Mobile Nav
// Start Active Nav Items Function
function activeNavItems(nav) {
    let navItems = Array.from(nav.querySelectorAll('a'));
    let mainPgeLink = nav.querySelector('.home');
    navItems.forEach(function (item) {
        item.onmouseover = function () {
            navItems.forEach(function (item) {
                item.classList.remove('active');
            });
            item.classList.add('active');
        };
        item.onmouseout = function () {
            navItems.forEach(function (item) {
                item.classList.remove('active');
            });
            if (!mainPgeLink.classList.contains('active')) {
                mainPgeLink.classList.add('active');
            }
        };
    });
}
// End Active Nav Items Function
// End Header
// Start FAQ
let faqBoxContainer = document.getElementById('faq-box-container');
tabActiveItems(faqBoxContainer);
tabDeactivateItems(faqBoxContainer);
function tabActiveItems(faqBoxContainer) {
    let faqBoxes = Array.from(faqBoxContainer.querySelectorAll('.box'));
    faqBoxes.forEach(function (item) {
        let num = item.querySelector('span.num');
        let firstRow = item.querySelector('.first-row');
        let secondRowP = item.querySelector('.inner-text');
        let plusIcon = item.querySelector('.plus');
        let minusIcon = item.querySelector('.minus');
        plusIcon.onclick = function () {
            plusIcon.classList.add('disable');
            plusIcon.classList.remove('enable');
            minusIcon.classList.add('enable');
            minusIcon.classList.remove('disable');
            num.classList.add('convert');
            firstRow.classList.add('convert');
            secondRowP.classList.add('not-hide');
            secondRowP.classList.remove('hide');
        }
    })
}
function tabDeactivateItems(faqBoxContainer) {
    let faqBoxes = Array.from(faqBoxContainer.querySelectorAll('.box'));
    faqBoxes.forEach(function (item) {
        let num = item.querySelector('.num');
        let firstRow = item.querySelector('.first-row');
        let secondRowP = item.querySelector('.inner-text');
        let plusIcon = item.querySelector('.plus');
        let minusIcon = item.querySelector('.minus');
        minusIcon.onclick = function () {
            plusIcon.classList.add('enable');
            plusIcon.classList.remove('disable');
            minusIcon.classList.add('disable');
            minusIcon.classList.remove('enable');
            num.classList.remove('convert');
            firstRow.classList.remove('convert');
            secondRowP.classList.add('hide');
            secondRowP.classList.remove('not-hide');
        }
    })
}
// End FAQ
