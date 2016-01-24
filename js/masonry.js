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

  $("#container").fadeIn(2000);

  // $('nav').on('click', 'a', function(e){
  //   e.preventDefault();
  //   var url = e.currentTarget.href;
  //   $('#container').load(url+'#container .item');
  //   history.pushState({},url,url);
  // });  
});






