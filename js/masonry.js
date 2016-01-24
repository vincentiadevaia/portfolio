<script>
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


var slideshow = function($slides) {
return $slides.Chocolat({
imageSize: 'contain',
loop : true
}).data('chocolat');
}

var originalSlideshow = slideshow($('.item'));

$('nav a').on('click', function(e){
e.preventDefault();

var newUrl = $(this).attr('href');

var downloadedContainer = $.load(newUrl + ' #container');

// replace images and re-load items
$container.html(downloadedContainer).reloadItems();

// stop original slide show and re-run chocolate
originalSlideshow.api().destroy();
initSlideshow($('.item'));
});

history.pushState({}, newUrl, newUrl);
});
});