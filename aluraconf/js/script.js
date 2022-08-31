// $(".navigation").click(function(event) {
//   event.preventDefault();
//   let id = (event.target.href).split("#")
//   console.log(id)
//   $([document.documentElement, document.body]).animate({
//       scrollTop: $("#"+id[1]).offset().top
//   }, 2000);
// });

function ativaScrollSuave(selector) {

  $(selector).click(function(event){
      event.preventDefault();

      var target = $(this).attr('href');

      $('html, body').animate({
          scrollTop: $(target).offset().top
      }, 1000);  
  });
}

ativaScrollSuave('a[href*=panel-about]');
ativaScrollSuave('a[href*=panel-speakers]');
ativaScrollSuave('a[href*=panel-form]');