document.addEventListener('DOMContentLoaded', function () {
    const accordions = document.querySelectorAll('.accordion');
  
    accordions.forEach(function (accordion) {
      accordion.addEventListener('click', function () {
        this.classList.toggle('active');
  
        const content = this.querySelector('.accordion-content');
        const icon = this.querySelector('.accordion-icon');
  
        if (content.style.display === 'block') {
          content.style.display = 'none';
          icon.textContent = '+';
        } else {
          content.style.display = 'block';
          icon.textContent = '-';
        }
      });
    });
  });
  