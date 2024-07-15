export function renderGallery(images) {
  const gallery = document.getElementById('gallery');
  const markup = images
    .map(
      image => `
    <a href="${image.largeImageURL}" class="gallery-item">
      <img src="${image.webformatURL}" alt="${image.tags}" loading="lazy"/>
      <div class="info">
        <p class="info-item"><b>Likes</b> ${image.likes}</p>
        <p class="info-item"><b>Views</b> ${image.views}</p>
        <p class="info-item"><b>Comments</b> ${image.comments}</p>
        <p class="info-item"><b>Downloads</b> ${image.downloads}</p>
      </div>
    </a>
  `
    )
    .join('');
  gallery.insertAdjacentHTML('beforeend', markup);
}

export function clearGallery() {
  const gallery = document.getElementById('gallery');
  gallery.innerHTML = '';
}
