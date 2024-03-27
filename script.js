document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const contents = document.querySelectorAll('.content');
  
    navLinks.forEach(function(navLink) {
      navLink.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = navLink.getAttribute('data-target');
        // Dölj alla innehållselement
        contents.forEach(function(content) {
          content.style.display = 'none';
        });
        // Visa det valda innehållet
        const targetContent = document.getElementById(targetId);
        if (targetContent) {
          targetContent.style.display = 'block';
        }
      });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Din befintliga kod
  
    const hireLink = document.getElementById('hire-link');
    hireLink.addEventListener('click', function(event) {
      event.preventDefault();
      // Öppna discord.com i ett nytt fönster
      window.open('https://discordapp.com/users/944959943310737408/', '_blank');
    });
});
  
  