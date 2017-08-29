//projects slider
// $('.projects-slider').slick({
//   centerMode: true,
//   centerPadding: '60px',
//   slidesToShow: 3,
//   prevArrow: '<img src="https://i.imgur.com/jWg43m9.png"/>',
//   nextArrow: '<img src="https://i.imgur.com/The9kds.png"/>',
//   responsive: [
//     {
//       breakpoint: 768,
//       settings: {
//         arrows: false,
//         centerMode: true,
//         centerPadding: '40px',
//         slidesToShow: 3
//       }
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         arrows: false,
//         centerMode: true,
//         centerPadding: '40px',
//         slidesToShow: 1
//       }
//     }
//   ]
// });

$('.mobile-open').click(function() {
  $('.mobile-show').toggleClass('yellow')
  $('.photo-bg .nav').slideToggle();
})
