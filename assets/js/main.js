/*=== Javascript function indexing hear===========

01. headerSticky()
02. swiperActivation()
03. wowActive()
04. videoActivation()
05. jaraLux()
06. backToTopInit()
07. cookiePopup()
08. datePicker()
09. magnificPopup()
10. mobileMenu()
11. desktopMenu()
12. stickySidebar()
13. Preloader()
14. Date()


==================================================*/
(function ($) {
  'use strict';

  var rtsJs = {
    m: function (e) {
      rtsJs.d();
      rtsJs.methods();
    },
    d: function (e) {
      (this._window = $(window)), (this._document = $(document)), (this._body = $('body')), (this._html = $('html'));
    },
    methods: function (e) {
      rtsJs.headerSticky();
      rtsJs.swiperActivation();
      rtsJs.wowActive();
      rtsJs.jaraLux();
      rtsJs.backToTopInit();
      rtsJs.datePicker();
      rtsJs.magnificPopup();
      rtsJs.mobileMenu();
      rtsJs.desktopMenu();
      rtsJs.stickySidebar();
      rtsJs.preloader();
      rtsJs.odoMeter();
      rtsJs.smoothScroll();
      rtsJs.videoActive();
    },
    // sticky Header
    headerSticky: function () {
      $(window).on('scroll', function () {
        var ScrollBarPostion = $(window).scrollTop();
        if (ScrollBarPostion > 100) {
          $('.header__function').addClass('is__sticky');
        } else {
          $('.header__function').removeClass('is__sticky');
        }
      });
    },
    swiperActivation: function () {
      $(document).ready(function(){
        var swiper = new Swiper(".banner-slider-active", {
          slidesPerView: 1,
          speed: 1200,
          effect: "fade",
          autoplay: {
            delay: 6000,
            disableOnInteraction: false,
          },
          loop:true,
        });
      });
      $(document).ready(function () {
        // BRAND SLIDER
        var swiper = new Swiper('.brand__slider', {
          slidesPerView: 6,
          spaceBetween: 30,
          loop: true,
          speed: 1000,
          autoplay: {
            delay: 3000,
            disableOnInteraction: false,
          },
          breakpoints: {
            1500: {
              slidesPerView: 6,
            },
            1300: {
              slidesPerView: 5,
            },
            991: {
              slidesPerView: 4,
              centeredSlides: false,
            },
            767: {
              slidesPerView: 4,
              centeredSlides: false,
            },
            575: {
              slidesPerView: 3,
            },
            0: {
              slidesPerView: 3,
            },
          },
        });
        // TESTIMONIAL SLIDER
        var swiper = new Swiper('.testi__slider', {
          slidesPerView: 4,
          spaceBetween: 30,
          loop: true,
          speed: 1000,
          autoplay: {
            delay: 3000,
            disableOnInteraction: false,
          },
          navigation: {
            nextEl: '.rts-btn-next',
            prevEl: '.rts-btn-prev',
          },
          pagination: {
            el: '.rts-dot-pagination',
            clickable: true,
          },
          breakpoints: {
            320: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1200: {
              slidesPerView: 4,
            },
          },
        });
        // TESTIMONIAL SLIDER 2
        var swiper1 = new Swiper('.testi__sliders-2', {
          slidesPerView: 1,
          spaceBetween: 30,
          loop: true,
          speed: 1000,
          autoplay: {
            delay: 3000,
            disableOnInteraction: false,
          },
          pagination: {
            el: '.rts-dot-pagination-2',
            clickable: true,
          },
        });
        // TESTIMONIAL SLIDER 2
        var swiper2 = new Swiper('.image__sliders', {
          slidesPerView: 1,
          spaceBetween: 30,
          loop: true,
          speed: 1000,
          autoplay: {
            delay: 3000,
            disableOnInteraction: false,
          },
          pagination: {
            el: '.rts-dot-pagination-2',
            clickable: true,
          },
        });

        swiper1.controller.control = swiper2;
        swiper2.controller.control = swiper1;
        // PROJECT SLIDER
        var swiper = new Swiper('.project__sliders', {
          slidesPerView: 2,
          spaceBetween: 30,
          centeredSlides: true,
          loopFillGroupWithBlank: true,
          grabCursor: true,
          loop: true,
          speed: 1500,
          autoplay: {
            delay: 3000,
            disableOnInteraction: false,
          },
          breakpoints: {
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1200: { slidesPerView: 2 },
          },
        });
        // PROJECT SLIDER TWO
        var swiper = new Swiper('.project__sliders-2', {
          slidesPerView: 2,
          spaceBetween: 30,
          centeredSlides: true,
          loopFillGroupWithBlank: true,
          grabCursor: true,
          loop: true,
          speed: 1500,
          autoplay: {
            delay: 3000,
            disableOnInteraction: false,
          },
          breakpoints: {
            0: { slidesPerView: 1 },
            576: { slidesPerView: 1.5 },
            768: { slidesPerView: 1.5 },
            1200: { slidesPerView: 2 },
          },
        });
      });
    },
    wowActive: function () {
      new WOW().init();
    },

    jaraLux: function (e) {
      $(document).ready(function () {
        // Function to detect if the device is mobile
        function isMobileDevice() {
          return /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        }

        // Initialize jarallax only if it's not a mobile device
        if (!isMobileDevice()) {
          $('.jarallax').jarallax();
        } else {
          console.log('Jarallax skipped on mobile devices');
        }
      });
    },

    backToTopInit: function (e) {
      $(document).ready(function () {
        var backButton = $('#rts-back-to-top');
        $(window).scroll(function () {
          if ($(this).scrollTop() > 100) {
            backButton.addClass('show');
          } else {
            backButton.removeClass('show');
          }
        });
        backButton.on('click', function () {
          $('html, body').animate(
            {
              scrollTop: 0,
            },
            1000
          );
        });
      });
    },
    datePicker: function (e) {
      $(function () {
        $('#check__in, #check__out').datepicker({
          dateFormat: 'dd-mm-yy',
          duration: 'fast',
        });
      });
    },
    magnificPopup: function (e) {
      // Image Gallery Popup
      $('.gallery').each(function () {
        $(this).magnificPopup({
          delegate: 'a',
          type: 'image',
          gallery: {
            enabled: true,
          },
        });
      });

      // Video Popup
      $('.popup-video').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false,
      });
    },
    mobileMenu: function () {
      try {
        // ===== Clone desktop menu =====
        var menuClone = $('.mobile__menu__active > ul').clone();

        // Add has-dropdown & chevron
        menuClone.find('li').each(function () {
          if ($(this).children('.sub-menu').length > 0) {
            $(this).addClass('has-dropdown');

            if ($(this).children('a').find('.chevron').length === 0) {
              $(this).children('a').append('<span class="chevron"><i class="fas fa-chevron-right"></i></span>');
            }
          }
        });

        // Inject into offcanvas
        $('.rts__offcanvas__mobile__menu nav').html(menuClone);

        // ===== Hide all submenus initially =====
        $('.rts__offcanvas__mobile__menu .sub-menu').hide();

        // ===== Submenu toggle =====
        $(document).on('click', '.rts__offcanvas__mobile__menu li.has-dropdown > a', function (e) {
          e.preventDefault();
          var parent = $(this).parent();
          var subMenu = parent.children('.sub-menu');

          if (parent.hasClass('active')) {
            // Close current submenu
            subMenu.stop(true, true).slideUp(400);
            parent.removeClass('active');
          } else {
            // Open current submenu
            subMenu.stop(true, true).slideDown(400);
            parent.addClass('active');

            // Close siblings
            parent.siblings('.has-dropdown').removeClass('active').children('.sub-menu').stop(true, true).slideUp(400);
          }
        });

        // ===== Offcanvas open =====
        // Use correct selector from your HTML, e.g., rts__offcanvas__header-toggle
        $(document).on('click', '.offcanvas-toggle', function (e) {
          e.preventDefault();
          $('.rts__offcanvas, .rts__offcanvas__overlay').addClass('active');
        });

        // ===== Offcanvas close (X button or overlay) =====
        $(document).on('click', '.rts__offcanvas__toggle__close, .rts__offcanvas__overlay', function (e) {
          e.preventDefault();
          $('.rts__offcanvas, .rts__offcanvas__overlay').removeClass('active');
        });
        // ===== Offcanvas close (X button or overlay) =====
        $(document).on('click', '.onepage .rts__offcanvas__mobile__menu ul li a ', function (e) {
          e.preventDefault();
          $('.rts__offcanvas, .rts__offcanvas__overlay').removeClass('active');
        });

        console.log('✅ Mobile menu initialized successfully');
      } catch (error) {
        console.error('❌ Mobile menu initialization failed:', error);
      }
    },
    desktopMenu: function (e) {
      $(document).ready(function () {
        $('.has__children .toggle').on('click', function (event) {
          event.preventDefault(); // Prevent the default action of the click event

          var $parentLi = $(this).closest('li'); // Get the closest <li> element

          // Toggle the 'active' class on the parent <li> to show/hide the submenu
          $parentLi.toggleClass('active');

          // Optionally, close other open menus by removing the 'active' class from other <li> elements
          $('.has__children').not($parentLi).removeClass('active');
        });
      });
    },
    stickySidebar: function (e) {
      if (typeof $.fn.theiaStickySidebar !== 'undefined') {
        $('.sticky-wrap .sticky-item').theiaStickySidebar({
          additionalMarginTop: 100,
        });
      }
    },
    preloader: function (e) {
      $('#de-loader').prepend($('<div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>'));
    },
    odoMeter: function () {
      $(document).ready(function () {
        window.odometerOptions = {
          format: '(ddd)',
        };
        function isInViewport(element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight);
        }

        function triggerOdometer(element) {
          const $element = $(element);
          if (!$element.hasClass('odometer-triggered')) {
            const countNumber = $element.attr('data-count');
            $element.html(countNumber);
            $element.addClass('odometer-triggered'); // Add a class to prevent re-triggering
          }
        }

        function handleOdometer() {
          $('.odometer').each(function () {
            if (isInViewport(this)) {
              triggerOdometer(this);
            }
          });
        }

        // Check on page load
        handleOdometer();

        // Check on scroll
        $(window).on('scroll', function () {
          handleOdometer();
        });
      });
    },
    smoothScroll: function (e) {
      $(document).on('click', '.onepage a[href^="#"]', function (event) {
        event.preventDefault();

        $('html, body').animate(
          {
            scrollTop: $($.attr(this, 'href')).offset().top,
          },
          300
        );
      });
    },
        videoActive: function () {
      $(document).on('click', '#myBtn', function () {
        $("#myVideo").toggleClass("show");

        const $btn = $(this);
        const isFullSize = $btn.data("fullSize"); // Check if it's currently full size

        if (isFullSize) {
          $btn.css({
            opacity: "1",
            width: $btn.data("originalWidth"), // Restore original width
            height: $btn.data("originalHeight") // Restore original height
          }).data("fullSize", false);
        } else {
          // Store the original width and height before changing
          $btn.data("originalWidth", $btn.css("width"));
          $btn.data("originalHeight", $btn.css("height"));

          $btn.css({
            opacity: "0",
            width: "100%", // Set to 100% width
            height: "100%" // Set to 100% height
          }).data("fullSize", true);
        }
      });
      $(document).ready(function () {
        var $video = $("#myVideo");
        var $btn = $("#myBtn");

        if ($video.length && $btn.length) {
          $btn.on("click", function () {
            if ($video[0].paused) {
              $video[0].play();
            } else {
              $video[0].pause();
            }
          });
        }
      });

    },
  };
  rtsJs.m();

  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('[data-bg-src]').forEach(function (el) {
      const bg = el.getAttribute('data-bg-src');
      if (bg) {
        el.style.backgroundImage = `url(${bg})`;
        el.style.backgroundSize = 'cover'; // Optional
        el.style.backgroundPosition = 'center'; // Optional
        el.style.backgroundRepeat = 'no-repeat'; // Optional
      }
    });
  });

  // BOOTSTRAP TOOLTIPS
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });
  
  $(window).on('load', function() {
        jQuery('#de-loader').fadeOut(500);
    });
})(jQuery, window);
