document.addEventListener('DOMContentLoaded', function () {
    const linksSmoothScroll = document.querySelectorAll('a[data-bs-target]');
    
    linksSmoothScroll.forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('data-bs-target');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
          });
        }
      });
    });
  });