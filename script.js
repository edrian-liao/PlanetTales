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

// JavaScript to toggle the navigation panel when the hamburger icon is clicked
const hamburgerIcon = document.getElementById("hamburgerIcon");
const navPanel = document.getElementById("navPanel");

let navPanelVisible = false;

// Initially hide the navPanel on small screens
if (window.innerWidth <= 1100) {
    navPanel.style.right = "-200px";
}

hamburgerIcon.addEventListener("click", () => {
    if (navPanelVisible) {
        navPanel.style.right = "-200px"; // Hide the panel
    } else {
        navPanel.style.right = "0"; // Show the panel
    }

    navPanelVisible = !navPanelVisible; // Toggle the visibility flag
});


// Add a click event listener to the button
const copyButton = document.getElementById("copyButton");
copyButton.addEventListener("click", (event) => {
    // Prevent the default click behavior (e.g., page navigation)
    event.preventDefault();

    // Select the text to copy (e.g., a link)
    const textToCopy = document.getElementById("textToCopy").textContent;

    // Create a temporary textarea to copy the text
    const textarea = document.createElement("textarea");
    textarea.value = textToCopy;
    document.body.appendChild(textarea);

    // Select and copy the text from the textarea
    textarea.select();
    document.execCommand("copy");

    // Remove the temporary textarea
    document.body.removeChild(textarea);

    // Create the notification element
    const copyNotification = document.createElement("div");
    copyNotification.id = "copyNotification";
    copyNotification.textContent = "Link copied to clipboard!";
    
    // Append the notification element after the button
    copyButton.parentNode.appendChild(copyNotification);

    // Position the notification relative to the button
    const buttonRect = copyButton.getBoundingClientRect();
    copyNotification.style.top = buttonRect.bottom + "px";
    copyNotification.style.left = buttonRect.left + buttonRect.width / 2 + "px";
    
    // Display the notification
    copyNotification.style.display = "block";

    // Hide the notification after 3 seconds (adjust as needed)
    setTimeout(() => {
        copyNotification.style.display = "none";
    }, 3000); // 3000 milliseconds (3 seconds)
});


