let elm = document.querySelector('#lastname');

elm.addEventListener('keyup', (e) => {
    e.preventDefault();

    alert(e.target.value);
});
