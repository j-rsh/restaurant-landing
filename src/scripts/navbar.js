
document.addEventListener('DOMContentLoaded', () => {
	const hamburger = document.querySelector('.hambergur-menu');
	const links = document.querySelector('.nav-links');
  
	hamburger.addEventListener('click', () => {
	  links.style.display = links.style.display === 'none'? 'flex' : 'none';
	});
  });
  