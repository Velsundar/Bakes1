document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener('scroll', function() {
        if (window.scrollY > 180) {
          document.getElementById('navbar_top').classList.add('fixed-top');
          // add padding top to show content behind navbar
          navbar_height = document.querySelector('.navbar').offsetHeight;
          document.body.style.paddingTop = navbar_height + 'px';
        } else {
          document.getElementById('navbar_top').classList.remove('fixed-top');
           // remove padding top from body
          document.body.style.paddingTop = '0';
        } 
    });
  });

  // Testimonial slide
  
  // scroll animate

  // ScrollReveal({ reset: true });

  // ScrollReveal().reveal(".aboutushead", {
  //   reset: false
  // });
  
  // ScrollReveal().reveal(".aboutushead1", {
  //   duration: 3000,
  //   origin: "top",
  //   distance: "400px",
  //   easing: "cubic-bezier(0.5, 0, 0, 1)",
  //   rotate: {
  //     x: 20,
  //     z: -10
  //   }
  // });
  