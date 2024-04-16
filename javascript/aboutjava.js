function imageCarousel() {
    // Select the carousel container
    const carouselContainer = document.querySelector('.carousel-container');

    // Select all images within the carousel
    const images = carouselContainer.querySelectorAll('img');

    // Set initial index and total number of images
    let currentIndex = 0;
    const totalImages = images.length;

    // Hide all images except the first one
    for (let i = 1; i < totalImages; i++) {
        images[i].style.display = 'none';
    }

    // Function to show the next image in the carousel
    function showNextImage() {
        // Hide the current image
        images[currentIndex].style.display = 'none';

        // Increment the index
        currentIndex = (currentIndex + 1) % totalImages;

        // Show the next image
        images[currentIndex].style.display = 'block';
    }

    // Function to show the previous image in the carousel
    function showPreviousImage() {
        // Hide the current image
        images[currentIndex].style.display = 'none';

        // Decrement the index
        currentIndex = (currentIndex - 1 + totalImages) % totalImages;

        // Show the previous image
        images[currentIndex].style.display = 'block';
    }

    // Add event listeners for next and previous buttons
    const nextButton = document.querySelector('.next-button');
    const prevButton = document.querySelector('.prev-button');

    nextButton.addEventListener('click', showNextImage);
    prevButton.addEventListener('click', showPreviousImage);
}

// Call the imageCarousel function when the DOM content is loaded
document.addEventListener('DOMContentLoaded', imageCarousel);
