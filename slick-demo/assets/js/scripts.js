$(document).ready(function() {
    // Single Item
    $('.single-item').slick({
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    });

    // Multiple Items
    $('.multiple-items').slick({
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    });

    // Responsive Display
    $('.responsive').slick({
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      }, {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }, {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }]
    });

    // Variable Width
    $('.variable-width').slick({
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      centerMode: true,
      variableWidth: true
    });

    // Adaptive Height
    $('.adaptive-height').slick({
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      adaptiveHeight: true
    });

    // Data Attribute Settings
    $('.data').slick();

    // Center Mode
    $('.center').slick({
      centerMode: true,
      infinite: true,
      centerPadding: '60px',
      slidesToShow: 3,
      speed: 500,
      responsive: [{
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      }, {
        breakpoint: 480,
        settings: {
          arrows: false,
          dots: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }]
    });

    // Lazy Loading
    $('.lazy').slick({
      lazyLoad: 'ondemand',
      slidesToShow: 3,
      slidesToScroll: 1,
      speed: 500
    });

    // Autoplay
    $('.autoplay').slick({
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000
    });

    // Fade
    $('.fade').slick({
      dots: true,
      infinite: true,
      speed: 500,
      fade: true,
      slide: 'div',
      cssEase: 'linear',
      autoplay: true,
      autoplaySpeed: 2000
    });


    // Add & Remove
    $('.add-remove').slick({
      dots: true,
      slidesToShow: 3,
      speed: 500,
      slidesToScroll: 3
    });

      var slideIndex = 1;

      // Add Slide button
      $('.js-add-slide').on('click', function() {
        slideIndex++;
        $('.add-remove').slick('slickAdd','<div><p>' + slideIndex + '</p></div>');
      });

      // Remove Slide button
      $('.js-remove-slide').on('click', function() {
        $('.add-remove').slick('slickRemove',slideIndex - 1);

        if (slideIndex !== 0){
          slideIndex--;
        }
      });

    // Filtering
    $('.filtering').slick({
      dots: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4
    });

      var filtered = false;

      // Filter Slides / Unfilter Slides button
      $('.js-filter').on('click', function() {
        if (filtered === false) {
          $('.filtering').slick('slickFilter',':even');
          $(this).text('Unfilter Slides');
          filtered = true;
        } else {
          $('.filtering').slick('slickUnfilter');
          $(this).text('Filter Slides');
          filtered = false;
        }
      });

    // Slider Syncing
    // a. Main slider
    $('.slider-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 500,
      arrows: false,
      fade: true,
      asNavFor: '.slider-nav',
      instructionsText: 'Changing this current slide of this carousel will change the current slide of the thumbnail carousel that follows.',
      regionLabel: 'main image carousel'
    });

    // b. Control slider
    $('.slider-nav').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      speed: 500,
      asNavFor: '.slider-for',
      dots: true,
      centerMode: true,
      slide: 'div',
      instructionsText: 'Changing the current slide of this carousel will change the current slide of the preceding main image carousel.',
      regionLabel: 'thumbnail carousel'
    });

    // Right to Left
    $('.single-item-rtl').slick({
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      rtl: true
    });

    // Display fixed header when user has scrolled down
    $(window).on('scroll', function() {
      if ($(window).scrollTop() > 166) {
        $('.fixed-header').show();
      } else {
        $('.fixed-header').hide();
      }
    });
  });