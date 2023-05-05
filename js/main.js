
//login
document.getElementById("myButton").onclick = function () {
  location.href = "login.html";
};
//on search
document.getElementById("onSearch").onclick = function () {
  location.href = "search.html";
};



new Swiper('.gallery-slider', {
  speed: 400,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  slidesPerView: 'auto',
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    992: {
      slidesPerView: 5,
      spaceBetween: 20
    }
  }
});

/**
 * Animation on scroll function and init
 */
function aos_init() {
  AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: true,
    mirror: false
  });
}
window.addEventListener('load', () => {
  aos_init();
});



/*$(document).ready(function(){
    var cartCountValue = 0;
    var cartCount = $('.cart .count');
    $(cartCount).text(cartCountValue);

    $('.cart-btn').on('click', function(){
      var cartBtn = this;
      var cartCountPositon = $(cartCount).offset();
      var btnPosition = $(this).offset();
      var leftPos = cartCountPositon.left < btnPosition.left ? btnPosition.left - (btnPosition.left - cartCountPositon.left) : cartCountPositon.left;
        
      vartopPos = cartCountPositon.top < btnPosition.top ? cartCountPositon.top : cartCountPositon.top;
      $(cartBtn).append("<span class='count >1</span>'");
      $(cartBtn).find(".count").each(function(i, count){
        $(count).offset({
          left:leftPos,
          top: topPos
        })
        .animate(
        {
          opacity:0
        },
        800,
        function(){
          $(this).remove();
          cartCountValue++;
          $(cartCount).text(cartCountValue);
        }
        );

        
      });
    })
});
*/
