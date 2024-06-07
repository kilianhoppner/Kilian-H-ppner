// Array of colors
const colors = [
    'rgb(244, 24, 243)', // Existing color
    'rgb(238, 108, 0)', // New color
    'rgb(0, 211, 18)',  // New color
    'rgb(255, 246, 0)'  // New color
];

// Function to preload colors
function preloadColors() {
    colors.forEach(color => {
        const img = new Image();
        img.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
        img.style.display = 'none';
        img.onload = function() {
            // Color loaded
        };
        document.body.appendChild(img);
    });
}

// Function to set a random background color for the body
function setRandomBackgroundColor() {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}

// Function to set a random background color for a button
function setRandomButtonBackgroundColor(buttonClass) {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const button = document.querySelector(buttonClass);
    button.style.backgroundColor = randomColor;
}

// Set the background color when the page loads
window.onload = function() {
    preloadColors();
    setRandomBackgroundColor();
    setRandomButtonBackgroundColor('.large-button');
    setRandomButtonBackgroundColor('.large-button2');
    setRandomButtonBackgroundColor('.large-button3');
    setRandomButtonBackgroundColor('.large-button4');
    setRandomButtonBackgroundColor('.large-button5');
    setRandomButtonBackgroundColor('.large-button6');
    setRandomButtonBackgroundColor('.large-button6');
    setRandomButtonBackgroundColor('.large-button7');
};

// Arrows Scrolling Images
document.addEventListener('DOMContentLoaded', function () {
    const imageContainerWrapper = document.querySelector('.image-container-wrapper');
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');
    const mediaElements = document.querySelectorAll('.image-container img, .image-container video');
    let currentIndex = 0;

    // Function to check if the mouse is in the first or last quarter of the media container
    function isMouseInFirstQuarter(event) {
        const rect = imageContainerWrapper.getBoundingClientRect();
        const mouseX = event.clientX - rect.left;
        return mouseX < imageContainerWrapper.offsetWidth / 5;
    }

    function isMouseInLastQuarter(event) {
        const rect = imageContainerWrapper.getBoundingClientRect();
        const mouseX = event.clientX - rect.left;
        return mouseX > (imageContainerWrapper.offsetWidth / 5) * 4;
    }

    // Function to show/hide arrows based on mouse position
    function toggleArrows(event) {
        const isInFirstQuarter = isMouseInFirstQuarter(event);
        const isInLastQuarter = isMouseInLastQuarter(event);

        // Smoothly adjust opacity based on mouse position
        leftArrow.style.opacity = isInFirstQuarter ? '1' : '0';
        rightArrow.style.opacity = isInLastQuarter ? '1' : '0';
    }

    // Event listener for mousemove to toggle arrows
    document.addEventListener('mousemove', function(event) {
        if (imageContainerWrapper.contains(event.target)) {
            toggleArrows(event);
        } else {
            // Hide arrows if mouse is outside the container
            leftArrow.style.opacity = '0';
            rightArrow.style.opacity = '0';
        }
    });

    // Event listeners for scroll functionality on arrows
    rightArrow.addEventListener('click', () => {
        if (currentIndex < mediaElements.length - 1) {
            currentIndex++;
            mediaElements[currentIndex].scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'start'
            });
        }
    });

    leftArrow.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            scrollToMediaElement(currentIndex);
        }
    });

    // Initially hide arrows
    leftArrow.style.opacity = '0';
    rightArrow.style.opacity = '0';

    // Function to scroll to the specified media element
    function scrollToMediaElement(index) {
        const targetMediaElement = mediaElements[index];
        if (targetMediaElement.tagName.toLowerCase() === 'img') {
            targetMediaElement.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'start'
            });
        } else {
            // For videos, manually adjust scrollLeft of the container to scroll to the video element
            const targetOffsetLeft = targetMediaElement.offsetLeft;
            imageContainerWrapper.scroll({
                left: targetOffsetLeft,
                behavior: 'smooth'
            });
        }
    }
});


// Custom Cursor:

document.addEventListener('DOMContentLoaded', function() {
    var cursorUrl = 'Cursor/CursorHand.png';
    
    // Set cursor on page load
    document.body.style.cursor = `url(${cursorUrl}), auto`;
    
    // Save cursor preference in local storage
    localStorage.setItem('customCursor', 'true');
    
    // Apply cursor again on visibility change
    document.addEventListener('visibilitychange', function() {
        if (document.visibilityState === 'visible') {
            var shouldApplyCustomCursor = localStorage.getItem('customCursor');
            if (shouldApplyCustomCursor === 'true') {
                document.body.style.cursor = `url(${cursorUrl}), auto`;
            }
        }
    });
});