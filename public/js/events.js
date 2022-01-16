window.onload = () => {

    document.querySelectorAll('.th').forEach(elem => elem.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('body').className = e.target.getAttribute('name');
    }))
}