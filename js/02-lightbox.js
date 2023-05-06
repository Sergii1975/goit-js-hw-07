import { galleryItems } from './gallery-items.js';
// Change code below this line
const list = document.querySelector('ul.gallery');

const markup = galleryItems.map(({ preview, original, description }) =>
    `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>
    `).join('');

list.insertAdjacentHTML('afterbegin', markup);

list.addEventListener('click', onCardClick);

function onCardClick(event) {
  event.preventDefault()
  const selectedImg = event.target.dataset.source
  if (event.target.nodeName !== "IMG") {
    return;
  }
      
}
new SimpleLightbox('.gallery a', { captionsData: 'alt', captionPosition: 'bottom', captionDelay: 250 });
console.log(galleryItems);
