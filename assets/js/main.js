$(function(){
    $('#gallery .slick').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
              }
            }
          ]
    })
    $('#gallery .btn-prev').click(function(){
        $('#gallery .slick').slick('slickPrev')
    })
    $('#gallery .btn-next').click(function(){
        $('#gallery .slick').slick('slickNext')
    })
    $('#products .slick').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
              }
            }
          ]
    })
    $('#products .btn-prev').click(function(){
        $('#products .slick').slick('slickPrev')
    })
    $('#products .btn-next').click(function(){
        $('#products .slick').slick('slickNext')
    })
})