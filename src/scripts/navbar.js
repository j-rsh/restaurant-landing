
document.addEventListener('DOMContentLoaded', () => {
	const hamburger = document.querySelector('.hambergur-menu');
	const links = document.querySelector('.nav-links');
	const linkStyle = document.querySelectorAll('.main-banner ul li a');

  
	hamburger.addEventListener('click', () => {
	  links.style.display = links.style.display === 'none'? 'flelinkStyle' : 'none';
	});
	document.getElementById('close-menu').addEventListener('click', function() {
		links.style.display ='none';
	  });

	  linkStyle.forEach(link => {
        link.addEventListener('click', function(e) {            
            linkStyle.forEach(link => link.classList.remove('active'));
            
            this.classList.add('active');
        });
    });
  });

  document.getElementById('bookBtn').addEventListener('click', function() {
    document.getElementById('book').scrollIntoView({behavior: "smooth"});
});

document.getElementById('menuBtn').addEventListener('click', function() {
    document.getElementById('menu').scrollIntoView({behavior: "smooth"});
});

