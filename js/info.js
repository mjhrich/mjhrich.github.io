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


});