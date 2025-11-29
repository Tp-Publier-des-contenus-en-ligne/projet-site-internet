document.addEventListener('DOMContentLoaded', function() {
    
    /* =========================================
       1. MENU MOBILE (Optimisé Accessibilité)
       ========================================= */
    const menuBtn = document.querySelector('.menu-mobile-btn');
    const header = document.querySelector('header');
    
    if (menuBtn && header) {
        menuBtn.addEventListener('click', function() {
            // Bascule la classe visuelle
            header.classList.toggle('nav-open');
            
            // ACCESSIBILITÉ (Point bonus SEO/Quality)
            // On signale aux lecteurs d'écran l'état du menu
            const isOpen = header.classList.contains('nav-open');
            menuBtn.setAttribute('aria-expanded', isOpen);
            
            // On change le texte pour l'utilisateur
            menuBtn.textContent = isOpen ? 'FERMER' : 'MENU';
        });
    }

    /* =========================================
       2. GESTION DU FORMULAIRE (Simulation)
       ========================================= */
    // Empêche la page de se recharger quand on clique sur "Envoyer"
    // C'est indispensable car tu n'as pas de serveur derrière (PHP/Node)
    const forms = document.querySelectorAll('form');
    
    forms.forEach(function(form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault(); // Bloque le rechargement
            
            // Simulation visuelle d'envoi réussi
            alert("Message envoyé ! (Simulation pour le projet scolaire)\nL'équipe Azur'Arts vous répondra sous 24h.");
            
            form.reset(); // Vide les champs proprement
        });
    });

});
