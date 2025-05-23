//  scroll to top button //
window.onscroll = function() {
  var button = document.getElementById("scrollToTopBtn");
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    button.style.display = "block"; 
  } else {
    button.style.display = "none"; 
  }
};

// Scroll to the top of the page//
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
