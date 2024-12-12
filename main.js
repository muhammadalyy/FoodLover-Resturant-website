// Show the popup after a delay
window.onload = function () {
    setTimeout(showPopup, 3000); // Show after 3 seconds
  };

  function showPopup() {
    document.getElementById('popup').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
  }

  // Close the popup
  document.getElementById('closePopup').onclick = function () {
    document.getElementById('popup').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
  };
  // Create the Back to Top Button
const backToTopButton = document.createElement("button");
backToTopButton.id = "backToTop";
backToTopButton.textContent = "↑";
document.body.appendChild(backToTopButton);

// Show/Hide the button on scroll
window.onscroll = function () {
    if (document.documentElement.scrollTop > 200) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};

// Scroll to the top when the button is clicked
backToTopButton.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};
