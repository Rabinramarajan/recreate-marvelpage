//Navbar section js


const menuBtn = document.querySelector(".menu-btn");
    const navbar = document.querySelector(".navbar");

    menuBtn.addEventListener("click", () => {
      menuBtn.classList.toggle("active");
      navbar.classList.toggle("active");
    });

    var nav = document.getElementById('nav');
    window.onscroll = function(){
      if (window.pageYOffset >650){
        nav.style.background = "#b5b5b569";
        nav.style.boxShadow = "0px 3px 3px rgba(0, 0, 0, 0.25)";
      }
      else{
        nav.style.background = "transparent";
      }
    }

    //Javacript for video slider navigation
    const btns = document.querySelectorAll(".nav-btn");
    const slides = document.querySelectorAll(".video-slide");
    const contents = document.querySelectorAll(".content");

    var sliderNav = function(manual){
      btns.forEach((btn) => {
        btn.classList.remove("active");
      });

      slides.forEach((slide) => {
        slide.classList.remove("active");
      });

      contents.forEach((content) => {
        content.classList.remove("active");
      });

      btns[manual].classList.add("active");
      slides[manual].classList.add("active");
      contents[manual].classList.add("active");
    }

    btns.forEach((btn, i) => {
      btn.addEventListener("click", () => {
        sliderNav(i);
      });
    });

        setTimeout(function(){
      $('#preloader').fadeToggle();
    },2000);

