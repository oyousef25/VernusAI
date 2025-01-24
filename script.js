function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');
  }
  
  // Scroll animations for sections
  const sections = document.querySelectorAll('section');
  const cards = document.querySelectorAll('.card');
  
  const options = {
    root: null,
    threshold: 0.1,
  };
  
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
  
        // Animate cards inside the section
        const childCards = entry.target.querySelectorAll('.card');
        childCards.forEach((card, index) => {
          setTimeout(() => {
            card.style.opacity = 1;
            card.style.transform = 'translateY(0)';
          }, index * 200); // Delay each card animation
        });
      }
    });
  }, options);
  
  sections.forEach(section => {
    observer.observe(section);
  });  