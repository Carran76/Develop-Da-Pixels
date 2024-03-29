document.addEventListener("DOMContentLoaded", function() {
    const joinButton = document.querySelector('.home-get-started.button');

    // Event lyssnare för att öppna en ny sida när "Join" knappen klickas
    joinButton.addEventListener('click', function() {
        // Ange den URL du vill navigera till här
        const destinationURL = 'https://discord.gg/hgQAgnb32W'; // Ersätt med din faktiska URL
        // Öppna den nya sidan
        window.location.href = destinationURL;
    });
});
