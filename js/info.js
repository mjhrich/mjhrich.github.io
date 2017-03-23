$(function(){


$('.grid').masonry({
  // options
  itemSelector: '.grid-item',
  columnWidth: 200
});

var $grid = $('.grid').masonry({
  // options...
});
// layout Masonry after each image loads
$grid.imagesLoaded().progress( function() {
  $grid.masonry('layout');
});


var $container = $('.grid');

$container.imagesLoaded(function(){
  $container.masonry({
    itemSelector: '.isotope-item',
    animate: true,
  columnWidth: 300,
  fitWidth: true,
    gutterWidth: 15
  });
});


});