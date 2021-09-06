

$(document).ready(function(){
    $('.slide2').owlCarousel({
    margin:30,
    items:5,
    dots: false,
    responsive : {
        // breakpoint from 0 up
        0 : {
            items:1
        },
        // breakpoint from 480 up
        600 : {
            items: 3
        },
        // breakpoint from 768 up
        1000 : {
            items: 5
        }
    }
});
var owl = $('.slide2');
owl.owlCarousel();
// Go to the next item
$('.customNextBtn2').click(function() {
    owl.trigger('next.owl.carousel');
})
// Go to the previous item
$('.customPrevBtn2').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel', [300]);
})
});


$(document).ready(function(){
    $('.slide3').owlCarousel({
    margin:30,
    items:5,
    dots: false,
    responsive : {
        // breakpoint from 0 up
        0 : {
            items:1
        },
        // breakpoint from 480 up
        600 : {
            items: 3
        },
        // breakpoint from 768 up
        1000 : {
            items: 5
        }
    }
});
var owl = $('.slide3');
owl.owlCarousel();
// Go to the next item
$('.customNextBtn3').click(function() {
    owl.trigger('next.owl.carousel');
})
// Go to the previous item
$('.customPrevBtn3').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel', [300]);
})
});






// custom script

var openuser = document.getElementById("open-user");
var userpfofile = document.getElementById("user");
openuser.addEventListener("click", function(){
    user.classList.toggle("active");
});








// single product gallery code
var singleImg = document.getElementById("singleImg");
var smallImg = document.getElementsByClassName("smallImg");

smallImg[0].addEventListener("click", function(){
    singleImg.src = smallImg[0].src;
});
smallImg[1].addEventListener("click", function(){
    singleImg.src = smallImg[1].src;
});
smallImg[2].addEventListener("click", function(){
    singleImg.src = smallImg[2].src;
});
smallImg[3].addEventListener("click", function(){
    singleImg.src = smallImg[3].src;
});


