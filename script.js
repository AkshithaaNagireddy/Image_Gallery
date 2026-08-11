// Image Dataset
const imagesData = [
  { id: 1, category: 'nature', title: 'Mountain Landscape', url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80' },
  { id: 2, category: 'architecture', title: 'Modern Skyscraper', url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80' },
  { id: 3, category: 'technology', title: 'Circuit Board', url: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80' },
  { id: 4, category: 'nature', title: 'Serene Forest Path', url: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=80' },
  { id: 5, category: 'architecture', title: 'Classic Bridge Architecture', url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80' },
  { id: 6, category: 'technology', title: 'Futuristic Workspace', url: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80' }
];

let filteredImages = [...imagesData];
let currentIndex = 0;

// DOM Elements
const galleryGrid = document.getElementById('gallery-grid');
const filterBtns = document.querySelectorAll('.filter-btn');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxCaption = document.getElementById('lightbox-caption');
const lightboxClose = document.getElementById('lightbox-close');
const lightboxPrev = document.getElementById('lightbox-prev');
const lightboxNext = document.getElementById('lightbox-next');

// Render Gallery Grid
function renderGallery(images) {
  galleryGrid.innerHTML = '';
  images.forEach((item, index) => {
    const galleryItem = document.createElement('div');
    galleryItem.className = 'gallery-item';
    galleryItem.innerHTML = `
      <img src="${item.url}" alt="${item.title}" loading="lazy">
      <div class="gallery-overlay">
        <span class="item-title">${item.title}</span>
      </div>
    `;
    galleryItem.addEventListener('click', () => openLightbox(index));
    galleryGrid.appendChild(galleryItem);
  });
}

// Category Filtering
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.getAttribute('data-filter');
    if (filter === 'all') {
      filteredImages = [...imagesData];
    } else {
      filteredImages = imagesData.filter(img => img.category === filter);
    }
    renderGallery(filteredImages);
  });
});

// Lightbox Logic
function openLightbox(index) {
  currentIndex = index;
  updateLightbox();
  lightbox.classList.add('active');
}

function updateLightbox() {
  const currentItem = filteredImages[currentIndex];
  lightboxImg.src = currentItem.url;
  lightboxCaption.textContent = currentItem.title;
}

function closeLightbox() {
  lightbox.classList.remove('active');
}

function navigateLightbox(direction) {
  if (direction === 'next') {
    currentIndex = (currentIndex + 1) % filteredImages.length;
  } else {
    currentIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
  }
  updateLightbox();
}

// Event Listeners
lightboxClose.addEventListener('click', closeLightbox);
lightboxNext.addEventListener('click', () => navigateLightbox('next'));
lightboxPrev.addEventListener('click', () => navigateLightbox('prev'));

lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) closeLightbox();
});

document.addEventListener('keydown', (e) => {
  if (!lightbox.classList.contains('active')) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowRight') navigateLightbox('next');
  if (e.key === 'ArrowLeft') navigateLightbox('prev');
});

// Initial Render
renderGallery(filteredImages);