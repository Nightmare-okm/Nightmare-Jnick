// Get the modal
const modal = document.getElementById("modal");

// Get the close button
const closeBtn = document.querySelector(".close");

// Show modal on first visit
window.onload = function() {
  if (!localStorage.getItem("visited")) {
    modal.style.display = "block";
    localStorage.setItem("visited", true);
  }
};

// Close modal
closeBtn.onclick = function() {
  modal.style.display = "none";
};

// Close modal when clicking outside
window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};