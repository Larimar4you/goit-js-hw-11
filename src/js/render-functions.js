// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';
// npm install izitoast --save

// Описаний у документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';
// npm install simplelightbox

// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';
// npm install izitoast --save

// Описаний у документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';
// npm install simplelightbox

const galleryEl = document.querySelector('.gallery');

export function renderGallery(images) {
  // Очищаем галерею перед добавлением новых изображений
  clearGallery();
  galleryEl.innerHTML = images.map(createImageCardMarkup).join('');

  // Инициализируем SimpleLightbox
  const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });
  lightbox.refresh();
}

function createImageCardMarkup({
  largeImageURL,
  webformatURL,
  tags,
  likes,
  views,
  comments,
  downloads,
}) {
  return `
    <a href="${largeImageURL}" class="gallery_item">
      <img src="${webformatURL}" alt="${tags}" class="gallery_image" width="380" loading="lazy"/>
      <div class="info">
        <p class="info-item"><b>Likes:</b> ${likes}</p>
        <p class="info-item"><b>Views:</b> ${views}</p>
        <p class="info-item"><b>Comments:</b> ${comments}</p>
        <p class="info-item"><b>Downloads:</b> ${downloads}</p>
      </div>
    </a>
 `;
}

// Функция показа сообщения об отсутствии результатов
export function showNoResultsMessage() {
  iziToast.error({
    title: 'Error',
    message:
      'Sorry, there are no images matching your search query. Please try again!',
    position: 'topRight',
  });
}

// Функция очистки галереи
export function clearGallery() {
  galleryEl.innerHTML = '';
}
