// $('.top').click(function(){
//     $('html, body').animate({
//         scrollTop: $( $(this).attr('#top') ).offset().top
//     }, 500);
//     return false;
// });
//
// function smoothScroll(target,duration){
//   var target = document.querySelector(target);
//   var targetPostion = target.get
// }
//
// smoothScroll(".section2", 1000);

// $('.top').on('click', function (e){
//   e.preventDefault();
//   $("html, body").animate({scrollTop: 0}, 800);
// })

$('a[href*=#]:not([href=#])').click(function() {
  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
      || location.hostname == this.hostname) {

    var target = $(this.hash);
    target = target.length ? target : $('[id=' + this.hash.slice(1) +']');
    if (target.length) {
      $('html,body').animate({
        scrollTop: target.offset().top
      }, 800);
      return false;
    }
  }
});
$("a[href='#top']").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});
