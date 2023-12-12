// Initialize Swiper
let mySwiper = new Swiper('.swiper-container', {
    direction: 'horizontal', // 'vertical' for vertical slider
    loop: true, // Loop the slides
    navigation: {          
        nextEl: ".swiper-button-next",          
        prevEl: ".swiper-button-prev",        
    }
});


$(document).ready(function () {
    $("#myForm").validate({
        rules: {
            card: {
                required: true,
                minlength: 10,
                maxlength: 10
            },
            cvv: {
                required: true,
                minlength: 3,
                maxlength: 3
            },
            expiration: {
                required: true,
            }
        },
        messages: {
            card: {
                required: "Please enter a valid card number",
                minlength: "Please enter 10 digits",
                maxlength: "Please enter no more than 10 digits"
            },
            expiration: {
                required: "Please enter your cards expiration date",
            },
            cvv: {
                required: "Please enter a valid CVV",
                minlength: "Please enter 3 digits",
                maxlength: "Please enter no more than 3 digits"
            }
        }
    });
});