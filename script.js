document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        window.location.href = this.getAttribute('onclick').split("'")[1];
    });
});

window.addEventListener('scroll', function() {
    const backToTopButton = document.querySelector('.back-to-top');
    if (window.pageYOffset > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

document.querySelector('.back-to-top').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
