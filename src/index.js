import "./scss/new.scss";

window.addEventListener('DOMContentLoaded', ()=>{
    $('.screenshots-slider').slick({
        infinite: true,
        slidesToShow: 3,
        centerMode: true,
        // arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
              }
            },
            {
              breakpoint: 480,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
              }
            }
          ]
    });
    $('.slick-prev').html('<i class="fas fa-long-arrow-alt-left"></i>')
    $('.slick-next').html('<i class="fas fa-long-arrow-alt-right"></i>')
});
