document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.getElementById('ContentCarr');
    const articles = carousel.querySelectorAll('article');
    
    // Fonction pour vérifier si l'appareil est mobile
    function isMobile() {
        return window.innerWidth <= 768;
    }

    // Créer les indicateurs de navigation
    function createIndicators() {
        const indicators = document.createElement('div');
        indicators.className = 'carousel-indicators';
        
        articles.forEach((_, index) => {
            const dot = document.createElement('span');
            dot.className = 'carousel-dot';
            if (index === 0) dot.classList.add('active');
            dot.addEventListener('click', () => scrollToSlide(index));
            indicators.appendChild(dot);
        });
        
        carousel.appendChild(indicators);
    }

    // Fonction pour faire défiler vers une slide spécifique
    function scrollToSlide(index) {
        const article = articles[index];
        article.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
        
        // Mettre à jour les indicateurs
        document.querySelectorAll('.carousel-dot').forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }

    // Gérer le défilement
    function handleScroll() {
        const scrollPosition = carousel.scrollLeft;
        const slideWidth = articles[0].offsetWidth;
        const currentIndex = Math.round(scrollPosition / slideWidth);
        
        document.querySelectorAll('.carousel-dot').forEach((dot, i) => {
            dot.classList.toggle('active', i === currentIndex);
        });
    }

    // Initialiser le carrousel mobile
    function initMobileCarousel() {
        if (isMobile()) {
            carousel.classList.add('mobile-carousel');
            if (!document.querySelector('.carousel-indicators')) {
                createIndicators();
            }
            carousel.addEventListener('scroll', handleScroll);
        } else {
            carousel.classList.remove('mobile-carousel');
            const indicators = carousel.querySelector('.carousel-indicators');
            if (indicators) {
                indicators.remove();
            }
            carousel.removeEventListener('scroll', handleScroll);
        }
    }

    // Initialiser et gérer le redimensionnement
    initMobileCarousel();
    window.addEventListener('resize', initMobileCarousel);
});
