document.addEventListener('DOMContentLoaded', () => {
  const slideshow = document.getElementById('slideshow');
  const images = ['Media/poster1.jpg', 'Media/poster2.jpg', 'Media/poster3.jpg']; // Add your image filenames
  let currentIndex = 0;

  function changeImage() {
      slideshow.src = images[currentIndex];
      currentIndex = (currentIndex + 1) % images.length;
  }

  setInterval(changeImage, 3000); // Change image every 3 seconds (3000 milliseconds)
});
