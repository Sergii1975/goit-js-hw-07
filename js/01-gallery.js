import { galleryItems } from './gallery-items.js';
// Change code below this line
const list = document.querySelector('ul.gallery');
const markup = galleryItems.map(({preview, original, description }) => 
    `<li><img src='${original}' alt='${description}'> </li>`).join('');
list.insertAdjacentHTML('afterend', markup);


console.log(galleryItems);
