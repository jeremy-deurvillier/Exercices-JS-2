let form = document.querySelector('form');
let fields = form.elements;
let raz = fields.namedItem('button');

raz.addEventListener('click', (e) => {
    // form.reset() // * Réinitialisation aux valeurs par défaut.

    for(let item = 0; item < fields.length; item ++) {
        let field = fields[item];

        if (field.type !== 'button') {
            field.value = '';
        }
    };
});
