import { fetchImages } from './js/pixabay-api';
import { renderGallery, clearGallery } from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const gallery = document.getElementById('gallery');
const loadMoreButton = document.getElementById('load-more');
const loader = document.getElementById('loader');

let currentPage = 1;
let currentQuery = '';
let lightbox = new SimpleLightbox('.gallery a');

searchForm.addEventListener('submit', async e => {
  e.preventDefault();
  currentQuery = searchInput.value.trim();

  if (!currentQuery) {
    iziToast.error({ title: 'Error', message: 'Please enter a search term' });
    return;
  }

  currentPage = 1;
  clearGallery();
  loadMoreButton.style.display = 'none';

  try {
    toggleLoader(true);
    const data = await fetchImages(currentQuery, currentPage);
    if (data.hits.length === 0) {
      iziToast.info({
        title: 'Info',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
    } else {
      renderGallery(data.hits);
      lightbox.refresh();
      loadMoreButton.style.display = 'block';
    }
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Something went wrong. Please try again later.',
    });
  } finally {
    toggleLoader(false);
  }
});

loadMoreButton.addEventListener('click', async () => {
  currentPage += 1;

  try {
    toggleLoader(true);
    const data = await fetchImages(currentQuery, currentPage);
    renderGallery(data.hits);
    lightbox.refresh();

    const { height: cardHeight } =
      gallery.firstElementChild.getBoundingClientRect();
    window.scrollBy({
      top: cardHeight * 2,
      behavior: 'smooth',
    });

    if (data.hits.length < 15) {
      loadMoreButton.style.display = 'none';
      iziToast.info({
        title: 'Info',
        message: "We're sorry, but you've reached the end of search results.",
      });
    }
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Something went wrong. Please try again later.',
    });
  } finally {
    toggleLoader(false);
  }
});

function toggleLoader(show) {
  loader.style.display = show ? 'block' : 'none';
}
