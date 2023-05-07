import { galleryItems } from './gallery-items.js';
// Change code below this line
const list = document.querySelector('ul.gallery');

const markup = galleryItems.map(({ preview, original, description }) =>
    `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
  <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
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
  const instance = basicLightbox.create(`
    <img src="${selectedImg}"/>
`)
instance.show()

document.addEventListener('keydown', closeByEscape) 
    function closeByEscape({ code }) {
      if (code === 'Escape') {
    instance.close()
  }
  document.removeEventListener('keydown', closeByEscape)    
  }
};







    
