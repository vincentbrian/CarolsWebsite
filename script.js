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

$('.top').on('click', function (e){
  e.preventDefault();
  $("html, body").animate({scrollTop: 0}, 1000);
})
