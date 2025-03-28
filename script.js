// Wait for DOM to fully load before executing
document.addEventListener('DOMContentLoaded', function() {

    // ===== 1. Smooth Scrolling (Fixed) =====
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start' // Aligns to top of section
          });
        }
      });
    });
  

  
  });