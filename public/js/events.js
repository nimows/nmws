window.onload = () => {

    if (window.localStorage.getItem('theme')) {
        document.body.className = window.localStorage.getItem('theme');
    } else {
        document.body.className = 'theme-dark-contrast';
    }

    document.querySelectorAll('.th').forEach(elem => elem.addEventListener('click', (e) => {
        e.preventDefault();
        document.body.className = e.target.getAttribute('theme');
        window.localStorage.setItem('theme', e.target.getAttribute('theme'));
    }));
}