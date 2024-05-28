function openTab(event, tabId) {
    event.preventDefault();
    var tabContent = document.querySelectorAll('.tab-content > ul');
    
    tabContent.forEach(function(content) {
        content.classList.remove('active');
    });
    
    var tabLinks = document.querySelectorAll('.menu-tab a');
    tabLinks.forEach(function(link) {
        link.classList.remove('active');
    });
    
    document.getElementById(tabId).classList.add('active');
    
    event.currentTarget.classList.add('active');
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.menu-tab a').click();
});