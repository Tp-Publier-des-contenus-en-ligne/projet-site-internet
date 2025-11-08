// Attend que tout le HTML soit chargé avant d'exécuter le script
document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Sélectionne le bouton "MENU"
    const menuBtn = document.querySelector('.menu-mobile-btn');
    
    // 2. Sélectionne l'en-tête (le <header>)
    const header = document.querySelector('header');

    // 3. S'assure que le bouton et le header existent bien sur la page
    if (menuBtn && header) {
        
        // 4. Ajoute un écouteur d'événement "clic" sur le bouton
        menuBtn.addEventListener('click', function() {
            
            // 5. Ajoute ou enlève la classe "nav-open" sur la balise <header>
            // C'est cette classe que le CSS utilise pour afficher/cacher le menu
            header.classList.toggle('nav-open');
        });
    }

});
