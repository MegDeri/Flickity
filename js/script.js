var elem = document.querySelector('.main-carousel');
/*var slideList = document.getElementById('carousel-cell').innerHTML;
Mustache.parse(slideList);
var slideCon = '';
// Loop for creating slides
for (var i = 0; i < slideData.length; i++) {
  console.log(slideData);
  slideCon += Mustache.render(slideList, slideData[i]);
}*/

//elem.insertAdjacentHTML('beforeend', slideCon);

var flkty = new Flickity( elem, {
  // options
  hash: true,
  cellAlign: 'left',
  contain: true,
});

//button restart
var buttonGroup = document.querySelector('.button-group');
var buttons = buttonGroup.querySelectorAll('.button');
buttons = fizzyUIUtils.makeArray( buttons );

buttonGroup.addEventListener( 'click', function( event ) {
  // filter for button clicks
  if ( !matchesSelector( event.target, '.button' ) ) {
    return;
  }
  var index = buttons.indexOf( event.target );
  flkty.select( index );
});

//Add progress bar below slides
var progressBar = document.querySelector('.progress-bar')

flkty.on( 'scroll', function( progress ) {
  progress = Math.max( 0, Math.min( 1, progress ) );
  progressBar.style.width = progress * 100 + '%';
});

// Initialize and add the map
(function () {
window.initMap = function() {
  // The location of Uluru
  var uluru = {lat: -25.344, lng: 131.036};
  // The map, centered at Uluru
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: uluru
  });
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}

})();







