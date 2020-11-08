$('.slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  centerMode: true,
  variableWidth: true,
  dots:true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3 
      }
    },
    {
      breakpoint: 480,
      settings: {
        
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});