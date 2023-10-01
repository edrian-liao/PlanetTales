document.addEventListener('DOMContentLoaded', () => {
  const slideshow = document.getElementById('slideshow');
  const images = ['media/poster1.jpg', 'media/poster2.jpg', 'media/poster3.jpg']; // Add your image filenames
  let currentIndex = 0;

  function changeImage() {
      slideshow.src = images[currentIndex];
      currentIndex = (currentIndex + 1) % images.length;
  }

  setInterval(changeImage, 3000); // Change image every 3 seconds (3000 milliseconds)
});
