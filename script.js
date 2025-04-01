var typeInst = new TypeIt("#header h1 #title span", {
	speed: 75,
	startDelay: 2000,
	waitUntilVisible: true,
	loop: false,
	lifeLike: true,
	deleteSpeed: 75
}).go();
  // Toggle menu for mobile view
        const menuToggle = document.querySelector('.menu-toggle');
        const navLinks = document.querySelector('.nav-links');

        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });