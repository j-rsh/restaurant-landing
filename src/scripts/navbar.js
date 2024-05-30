
document.addEventListener('DOMContentLoaded', () => {
	const hamburger = document.querySelector('.hambergur-menu');
	const links = document.querySelector('.nav-links');
  
	hamburger.addEventListener('click', () => {
	  links.style.display = links.style.display === 'none'? 'flex' : 'none';
	});
	document.getElementById('close-menu').addEventListener('click', function() {
		links.style.display ='none';
	  });
  });

  document.getElementById('bookBtn').addEventListener('click', function() {
    document.getElementById('form').scrollIntoView({behavior: "smooth"});
});

document.getElementById('menuBtn').addEventListener('click', function() {
    document.getElementById('menu').scrollIntoView({behavior: "smooth"});
});