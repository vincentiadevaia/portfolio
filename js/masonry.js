$(document).ready(function () {
  var $container = $('#container');
  
  var $mason = $container.masonry({
    itemSelector: '.item',
    isFitWidth: true,
    transitionDuration: 0
  });
  
  $container.imagesLoaded().progress(function() {
    $mason.masonry('layout');
  });

  $("#container").fadeIn(3000);

});






