let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

let bar = document.getElementById('bars');

window.onscroll = () => {
    sections.forEach(section => {
        let top = window.scrollY;
        let offset = section.offsetTop - 130;
        let height = section.offsetHeight;
        let id = section.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']')
                .classList.add('active');
            })
        }
    });
};

document.querySelector('#bars').addEventListener('click', function() {
    document.getElementById("content-menu").classList.toggle('menu-active');
  });



