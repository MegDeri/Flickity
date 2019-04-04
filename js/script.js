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
