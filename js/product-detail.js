// detail product slider
$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    arrows: true,
    swipeToSlide: true,
    asNavFor: '.slider-for',
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    nextArrow: '<img class="btnNext-slider" src="../asset/Pictures/trang-chu/nextButton.png" >',
    prevArrow: '<img class="btnPrev-slider" src="../asset/Pictures/trang-chu/backButton.png" >'
});
$('.related-slider').slick({
    infinite: true,
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: '<img class="btnNext-prod" src="../asset/Pictures/trang-chu/nextButton.png" >',
    prevArrow: '<img class="btnPrev-prod" src="../asset/Pictures/trang-chu/backButton.png" >'
});