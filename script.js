
   document.addEventListener('DOMContentLoaded', function() {
            const sections = document.querySelectorAll('.section');
            const options = {
                threshold: 0.1
            };

            const menuButton = document.getElementById('menu-button');
  const mobileMenu = document.getElementById('mobile-menu');

  menuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                    } else {
                        entry.target.classList.remove('active');
                    }
                });
            }, options);

            sections.forEach(section => {
                observer.observe(section);
            });

            document.querySelectorAll('a.nav-link').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    const targetId = this.getAttribute('href').substring(1);
                    const targetSection = document.getElementById(targetId);

                    targetSection.scrollIntoView({
                        behavior: 'smooth'
                    });
                });
            });
        });
  

c