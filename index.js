const upArrow = document.getElementById('upArrow');
  
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      upArrow.classList.add('active');
    } else {
      upArrow.classList.remove('active');
    }
  });
  
  upArrow.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
