document.addEventListener('DOMContentLoaded', function() {
    // Grab the elements
    // Elements: BgImg change
    let clsuBtn = document.querySelector('#clsu');
    let harvardBtn = document.querySelector('#harvard');
    let pupBtn = document.querySelector('#pup');

    // Elements: BgColor change
    let idProfile = document.querySelector('#id-profile');
    let portrait = document.querySelector('.portrait');
    let btns = document.querySelectorAll('.btnInfo .btn');

    // Element: Img change
    let image = document.querySelector('#profile');

    // Change background image when logo is clicked
    let body1 = document.querySelector('#body1');
    clsuBtn.addEventListener('click', function() {
        body1.style.backgroundImage = "linear-gradient(rgba(45, 55, 72, 0.8), rgba(45, 55, 72, 0.8)), url('https://clsu.edu.ph/storage/img/home/why-choose/wc1.jpg')";
    });

    harvardBtn.addEventListener('click', function() {
        body1.style.backgroundImage = "linear-gradient(rgba(45, 55, 72, 0.8), rgba(45, 55, 72, 0.8)), url('https://www.crimsoneducation.org/_next/image?url=https%3A%2F%2Fa.storyblok.com%2Ff%2F64062%2F2560x1792%2F39445ec358%2Fharvard.jpeg&w=3840&q=75')";
    });

    pupBtn.addEventListener('click', function() {
        body1.style.backgroundImage = "linear-gradient(rgba(45, 55, 72, 0.8), rgba(45, 55, 72, 0.8)), url('https://i.imgur.com/2xQUt6D.jpeg')";
    });

    // Change background color when div is clicked
    idProfile.addEventListener('click', function() {
        let colorProfile = window.getComputedStyle(idProfile).backgroundColor;
        let col;

        if(colorProfile === 'rgb(255, 255, 255)' || colorProfile === 'rgba(0, 0, 0, 0)') {
            col = '#2d3748';
            idProfile.style.backgroundColor = col;
        } else {
            col = '#fff';
            idProfile.style.backgroundColor = col;
        }
        portrait.style.backgroundColor = colorProfile;
        for (let btn of btns) {
            btn.style.backgroundColor = colorProfile;
            btn.style.color = col;
        }
    });

    // Change image when image is clicked
    portrait.addEventListener('click', function(event) {
        event.stopPropagation();

        if (image.src.endsWith('jm2.png')) {
            image.src="./src/jm1.png";
        } else {
            image.src="./src/jm2.png";
        }
    });
});
