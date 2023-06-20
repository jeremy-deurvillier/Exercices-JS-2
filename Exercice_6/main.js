let images = document.querySelectorAll('img');

/* ** Modifie l'attribut src d'un element image.
*
* @param Event eventType Un type d'événement.
* @param elm Un élément HTML image.
* */
function modify_images(eventType, elm) {
    let name, ext;

    if (eventType === 'mouseenter') {
        [name, ext] = elm.src.split('.');
        elm.src = name + '_2.' + ext;
    }

    if (eventType === 'mouseleave') {
        [name, ext] = elm.src.split('_2');
        elm.src = name + ext;
    }
}

images.forEach((img) => img.addEventListener('mouseenter', (e) => modify_images(e.type, e.target)));
images.forEach((img) => img.addEventListener('mouseleave', (e) => modify_images(e.type, e.target)));
