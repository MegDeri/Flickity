# Flickity

Features
Carousel with 5 slides, hash links, scroll bar and restart button.
Hash links will select slides on click.
Restart button- return to first slide.
Scroll bar is showing progress while scrolling.

Download
hash.js
flickity.pkgd.min.js 
flickity.min.css

// vanilla JS
var flkty = new Flickity( '.main-carousel', {
  ...options...
});

HTML
Add id attributes to cell elements.

<div class="main-carousel">
  <div class="carousel-cell" id="carousel-cell1">...</div>
  <div class="carousel-cell" id="carousel-cell2">...</div>
  <div class="carousel-cell" id="carousel-cell3">...</div>
  ...
</div>






