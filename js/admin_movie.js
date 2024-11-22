var add_movie_btn = document.getElementById("movie_btn");
var movie_close = document.getElementById("movie_close");
var add_movie = document.getElementById("add_movie");
var bg_content = document.getElementById("con");
var main_modal = document.getElementById("main_modal");
var cancel_btn = document.getElementById("cancel");
add_movie_btn.onclick = function() {
    add_movie.style.display = "block";
    main_modal.style.display = "block"
    bg_content.style.filter= "blur(10px)";
    bg_content.style.transition = "filter 0.5s ease-in-out";

}

movie_close.onclick = function() {
    add_movie.style.display = "none";
    main_modal.style.display = "none"
    bg_content.style.filter= "blur(0)"
}

cancel_btn.onclick = function() {
    add_movie.style.display = "none";
    main_modal.style.display = "none"
    bg_content.style.filter= "blur(0)"
}


// window.onclick = function(event) {
//     // Check if the clicked element is not the element itself
//     if (event.target !== movie_btns) {
//       add_movie.style.display = "none";
//       bg_con.style.filter= "blur(0)"
//       main_modal.style.display = "none"

//     }
//   };

function displayImagePreview() {
    var m_poster = document.getElementById('m_poster');
    var preview = document.getElementById('preview');
    // var preview.src = "";
    if (m_poster.files) {
      var reader = new FileReader();

      reader.onload = function(e) {
        preview.src = e.target.result;
      };

      // Read the selected file as a data URL
      reader.readAsDataURL(m_poster.files[0]);

      // Display the image preview
      preview.style.display = 'block';
    }
  }