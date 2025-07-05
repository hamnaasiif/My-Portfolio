// Import jQuery
const $ = require('jquery');

$(document).ready(() => {
    // Set current year in footer
    $("#currentYear").text(new Date().getFullYear())
  
    // Initialize animations on page load - simplified to ensure visibility
    $(".hero-badge, .hero-title, .hero-description, .hero-buttons, .hero-image-container, .scroll-indicator").addClass(
      "show",
    )
  
    // Backup animation with setTimeout
    setTimeout(() => {
      $(".hero-badge, .hero-title, .hero-description, .hero-buttons, .hero-image-container, .scroll-indicator").addClass(
        "animate-fade-in",
      )
    }, 100)
  
    // Animate scroll indicator
    setInterval(() => {
      $(".scroll-dot").animate(
        {
          top: "60%",
        },
        1000,
        function () {
          $(this).animate(
            {
              top: "20%",
            },
            1000,
          )
        },
      )
    }, 2000)
  
    // Navbar scroll effect
    $(window).scroll(function () {
      if ($(this).scrollTop() > 50) {
        $(".navbar").addClass("navbar-scrolled")
      } else {
        $(".navbar").removeClass("navbar-scrolled")
      }
  
      // Show/hide scroll to top button
      if ($(this).scrollTop() > 300) {
        $("#scrollToTop").addClass("active")
      } else {
        $("#scrollToTop").removeClass("active")
      }
  
      // Animate elements on scroll
      $(".fade-in, .slide-up, .slide-right, .slide-left").each(function () {
        var elementTop = $(this).offset().top
        var elementVisible = 150
        var windowHeight = $(window).height()
        var scrollTop = $(window).scrollTop()
  
        if (elementTop < windowHeight + scrollTop - elementVisible) {
          $(this).addClass("active")
        }
      })
  
      // Parallax effect for hero section
      var scrollTop = $(window).scrollTop()
      $(".parallax-hero-image").css({
        transform: "translateY(" + scrollTop * 0.1 + "px)",
      })
    })
  
    // Trigger scroll once to initialize animations
    $(window).trigger("scroll")
  
    // Smooth scrolling for anchor links
    $('a[href*="#"]')
      .not('[href="#"]')
      .not('[href="#0"]')
      .click(function (event) {
        if (
          location.pathname.replace(/^\//, "") === this.pathname.replace(/^\//, "") &&
          location.hostname === this.hostname
        ) {
          var target = $(this.hash)
          target = target.length ? target : $("[name=" + this.hash.slice(1) + "]")
          if (target.length) {
            event.preventDefault()
            $("html, body").animate(
              {
                scrollTop: target.offset().top - 70,
              },
              1000,
            )
  
            // Close mobile menu if open
            $(".navbar-collapse").collapse("hide")
          }
        }
      })
  
    // Scroll to top button
    $("#scrollToTop").click(() => {
      $("html, body").animate({ scrollTop: 0 }, 800)
      return false
    })
  
    
  })

// Download Resume Function
function downloadResume() {
  // Create a temporary link element
  const link = document.createElement('a');
  
  // Set the download attributes
  link.href = 'resume.pdf'; // Path to your PDF file
  link.download = 'Hamna_Asif_Resume.pdf'; // Name for the downloaded file
  
  // Append to body, click, and remove
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  
  // Optional: Show a success message
  const button = document.querySelector('.download-resume-btn');
  const originalText = button.innerHTML;
  
  
  
  setTimeout(() => {
    button.innerHTML = originalText;
    button.style.background = 'linear-gradient(135deg, var(--accent-color) 0%, #d64545 50%, #b83a3a 100%)';
  }, 2000);
}