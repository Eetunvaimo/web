(function ($) {
    "use strict";
  
    // Page cursors
    document.addEventListener("DOMContentLoaded", function () {
      var t = document.getElementById("cursor"),
          e = document.getElementById("cursor2"),
          i = document.getElementById("cursor3");
  
      if (t && e && i) {
        document.body.addEventListener("mousemove", function (n) {
          t.style.left = n.clientX + "px";
          t.style.top = n.clientY + "px";
          e.style.left = n.clientX + "px";
          e.style.top = n.clientY + "px";
          i.style.left = n.clientX + "px";
          i.style.top = n.clientY + "px";
        });
      }
  
      function n() {
        e.classList.add("hover");
        i.classList.add("hover");
      }
  
      function s() {
        e.classList.remove("hover");
        i.classList.remove("hover");
      }
  
      var r = document.querySelectorAll(".hover-target");
      r.forEach(function (el) {
        el.addEventListener("mouseover", n);
        el.addEventListener("mouseout", s);
      });
  
      // Navigation menu
      var body = document.querySelector("body"),
          menu = document.querySelector(".menu-icon"),
          menuItems = document.querySelectorAll(".nav__list-item");
  
      if (menu) {
        menu.addEventListener("click", function () {
          body.classList.toggle("nav-active");
        });
      } else {
        console.error("Menu element (.menu-icon) not found!");
      }

      // Swipe functionality for slide2
      var slide2 = document.getElementById("slide2");
      var arrowLeft = document.querySelector(".arrow-left");
      var arrowRight = document.querySelector(".arrow-right");
      var contents = document.querySelectorAll(".slide2-content");
      var currentIndex = 1; // Start with the middle content

      function showContent(index) {
          contents.forEach(function (content, i) {
              content.classList.toggle("hidden", i !== index);
          });
      }

      if (slide2 && arrowLeft && arrowRight && contents.length > 0) {
          showContent(currentIndex);

          arrowLeft.addEventListener("click", function () {
              currentIndex = (currentIndex - 1 + contents.length) % contents.length;
              showContent(currentIndex);
          });

          arrowRight.addEventListener("click", function () {
              currentIndex = (currentIndex + 1) % contents.length;
              showContent(currentIndex);
          });
      }
  
    });
  })(jQuery);




  $(document).ready(function() {
    // Trigger the footer to slide in after a delay (e.g., after 3 seconds)
    setTimeout(function() {
        $('.footer').addClass('show-footer');
    }, 3000); // Change the time (3000ms = 3 seconds) as needed
});



(function($) { "use strict";

	//Switch dark/light
	
	$(".switch").on('click', function () {
		if ($("body").hasClass("light")) {
			$("body").removeClass("light");
			$(".switch").removeClass("switched");
		}
		else {
			$("body").addClass("light");
			$(".switch").addClass("switched");
		}
	});
		
	
		
		
	});
	
(jQuery); 

  
$(document).ready(function() {
  var progressPath = document.querySelector('.progress-wrap path');
  var pathLength = progressPath.getTotalLength();
  progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
  progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
  progressPath.style.strokeDashoffset = pathLength;
  progressPath.getBoundingClientRect();
  progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';		
  var updateProgress = function () {
      var scroll = $(window).scrollTop();
      var height = $(document).height() - $(window).height();
      var progress = pathLength - (scroll * pathLength / height);
      progressPath.style.strokeDashoffset = progress;
  }
  updateProgress();
  $(window).scroll(updateProgress);	
  var offset = 50;
  var duration = 550;
  jQuery(window).on('scroll', function() {
      if (jQuery(this).scrollTop() > offset) {
          jQuery('.progress-wrap').addClass('active-progress');
      } else {
          jQuery('.progress-wrap').removeClass('active-progress');
      }
  });				
  jQuery('.progress-wrap').on('click', function(event) {
      event.preventDefault();
      jQuery('html, body').animate({scrollTop: 0}, duration);
      return false;
  })
});

document.addEventListener("DOMContentLoaded", function () {
  var body = document.body;
  var toggleButton = document.querySelector(".toggle-icon");

  toggleButton.addEventListener("click", function () {
      body.classList.toggle("nav-open");
  });
});

