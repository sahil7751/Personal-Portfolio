document.addEventListener('DOMContentLoaded', () => {

    const sections = document.querySelectorAll('section, header'); // Include header
    const navLinks = document.querySelectorAll('.nav-menu a');

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;

            // The - 75 is an offset for the fixed navbar height + a little extra
            if (pageYOffset >= (sectionTop - 75)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(a => {
            a.classList.remove('active');
            if (a.getAttribute('href') === `#${current}`) {
                a.classList.add('active');
            }
        });
    });
});