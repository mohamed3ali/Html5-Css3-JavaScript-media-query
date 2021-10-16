
// Initialize and add the map

function initMap() {
  // The location of menofia
  var menofia = { lat: 30.076229, lng: 31.204559 };
  // The map, centered at menofia
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: menofia,
  });
  // The marker, positioned at menofia
  var marker = new google.maps.Marker({
    position: menofia,
    map: map,
  });
}



// Smooth scrolling
$("#navbar a, .btn").on("click", function(event) {

  if(this.hash !== "") {
    event.preventDefault();

    const hash = this.hash;

    $("html, body").animate({scrollTop: $(hash).offset().top - 100}, 800);
  }
});


// navbar Opacity

window.addEventListener("scroll", function() {
  if(window.scrollY > 150) {
    document.querySelector("#navbar").style.opacity = 0.9;
  } else {
    document.querySelector("#navbar").style.opacity = 1;
  }
});


