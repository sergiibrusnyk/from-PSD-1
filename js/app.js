$(function() {

  $('.scrollTo').on('click', function(e) {
    e.preventDefault();
    var href = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(href).offset().top + 'px'
    }, 1500, function() {
      // Dodajemy hash do adresu
      location.hash = href;
    });
  });

});
