 $(document).ready(function () {
        var currentSlide = 0;
        var totalSlides = $(".slider-item").length;

        function showSlide(slideIndex) {
          $(".slider-item").removeClass("active-slider");
          $(".slider-item:eq(" + slideIndex + ")").addClass("active-slider");
          $(".dot").removeClass("active-dot");
          $(".dot:eq(" + slideIndex + ")").addClass("active-dot");
        }

        function createDots() {
          var dotsContainer = $(".slider-dots");
          dotsContainer.empty(); // Clear any existing dots

          for (var i = 0; i < totalSlides; i++) {
            var dotClass = i === currentSlide ? "dot active-dot" : "dot";
            dotsContainer.append('<span class="' + dotClass + '"></span>');
          }
        }
        createDots();
        $(".dot").click(function () {
          var dotIndex = $(this).index();
          currentSlide = dotIndex;
          showSlide(currentSlide);
        });
        function navigateSlide(direction) {
          currentSlide += direction;
          if (currentSlide < 0) {
            currentSlide = totalSlides - 1;
          } else if (currentSlide >= totalSlides) {
            currentSlide = 0;
          }
          showSlide(currentSlide);
        }

        $(".slider-item:first-child").addClass("active-slider");

        // Handle swipe left/right for touch devices
        $(".mobile-slider").swipe({
          swipeLeft: function () {
            navigateSlide(1);
          },
          swipeRight: function () {
            navigateSlide(-1);
          },
          allowPageScroll: "vertical",
          threshold: 50, // Minimum swipe distance to trigger
        });

        // When the window size is less than 786px (mobile), show the slider
        $(window).on("resize", function () {
          if ($(window).width() <= 786) {
            $(".mobile-slider").show();
          } else {
            $(".mobile-slider").hide();
          }
        });
      });