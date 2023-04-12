import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line


const list = document.querySelector('.gallery');

function createGallery(arr) {
  return arr
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`
    )
    .join('');
}

list.insertAdjacentHTML('beforeend', createGallery(galleryItems));

let gallery = new SimpleLightbox('.gallery a', {
      captionSelector: "img",
      captionsData: "alt",
      captions: true,
      captionDelay: 250,
      preloading: false,
    });
gallery.on('show.simplelightbox', function () {});

