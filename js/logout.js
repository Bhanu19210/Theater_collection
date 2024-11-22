var down = document.getElementById("drop_d");
var up = document.getElementById("drop_u");
var log = document.getElementById("logout");
down.onclick = function() {
        log.style.display = "block";
        down.style.display = "none";
        up.style.display = "block";
}


up.onclick = function() {
    log.style.display = "none";
    down.style.display = "block";
    up.style.display = "none";
}


// Add a click event listener to the document
window.onclick = function(event) {
  // Check if the clicked element is not the element itself
  if (event.target !== down) {
    // Set the display property to none
    down.style.display = 'block';
    log.style.display = "none";
    up.style.display = "none";
  }
};


