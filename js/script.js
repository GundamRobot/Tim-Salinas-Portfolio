'use strict';

// Toggles navigation when clicking hamburger icon at small viewport
var menu = document.querySelector('.main-nav');

document.querySelector('#hamburger-icon').addEventListener('click', function() {
    if(menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'block';
        this.className = 'open';
    } else {
        menu.style.display = 'none';
        this.className = 'close';
    }
});

// Sticky nav functionality
window.onscroll = function() {
    var currentPosition = window.pageYOffset;
    var header = document.querySelector('header');

    // console.log(currentPosition);
    var hamburgerIcon = document.querySelector('#hamburger-icon');
    var iconDivs = hamburgerIcon.childNodes;

    if(currentPosition >= header.offsetHeight - 1) {
        document.querySelector('#nav-bar').className = 'sticky-nav';

        iconDivs[1].style.backgroundColor = '#000';
        iconDivs[3].style.backgroundColor = '#000';
        iconDivs[5].style.backgroundColor = '#000';
    } else {
        document.querySelector('#nav-bar').className = 'nav-bar';

        iconDivs[1].style.backgroundColor = '#e67e22';
        iconDivs[3].style.backgroundColor = '#e67e22';
        iconDivs[5].style.backgroundColor = '#e67e22';
    }
}

// Smooth scrolling
$(".nav-button").click(function(event){
    //"this" refers to the anchor clicked
    var anchorLink = $(this).attr("href");

    $("html, body").animate({
        scrollTop: $(anchorLink).offset().top
    }, 1000);
    // 1000 refers to the time it takes to slide in milliseconds

    event.preventDefault();
    // We prevent the default behavior of the page jump.
});
