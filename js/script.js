var elem = document.querySelector('.main-carousel');
var slideList = document.getElementById('carousel-cell').innerHTML;
Mustache.parse(slideList);
var slideCon = '';
// Loop for creating slides
for (var i = 0; i < slideData.length; i++) {
  console.log(slideData);
  slideCon += Mustache.render(slideList, slideData[i]);
}
//Display slides in html
elem.insertAdjacentHTML('beforeend', slideCon);

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

window.initMap = function() {
  // The location of Uluru
  var sydney = slideData[0].coords;
  // The map, centered at Uluru
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: sydney
  });
  // Loop for adding coords to the slides
  for (var y = 0; y < slideData.length; y++) {
    addMarker(slideData[y].coords);
  } 
  //Add marker function
  function addMarker(point) {
    var marker = new google.maps.Marker({
      position: point,
      map: map
    });
  } 
}




