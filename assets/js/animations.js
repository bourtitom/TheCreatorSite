// Vérifier si on est sur mobile
function isMobile() {
    return window.innerWidth <= 768;
}

// Intersection Observer pour les animations au défilement
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !isMobile()) {
            entry.target.classList.add('show');
        }
    });
}, {
    threshold: 0.1
});

// Animer les sections au défilement seulement sur desktop
function initAnimations() {
    if (!isMobile()) {
        document.querySelectorAll('section').forEach((section) => {
            section.classList.add('hidden');
            observer.observe(section);
        });
    } else {
        document.querySelectorAll('section').forEach((section) => {
            section.classList.remove('hidden');
            section.classList.remove('show');
        });
    }
}

// Carrousel amélioré pour le Dev Book
class Carousel {
    constructor(element) {
        this.element = element;
        this.articles = Array.from(element.querySelectorAll('article'));
        this.currentIndex = 0;
        if (!isMobile()) {
            this.setupCarousel();
        }
    }

    setupCarousel() {
        // Créer les indicateurs
        const indicators = document.createElement('div');
        indicators.className = 'carousel-indicators';
        
        this.articles.forEach((_, index) => {
            const dot = document.createElement('button');
            dot.className = 'carousel-dot';
            if (index === 0) dot.classList.add('active');
            dot.addEventListener('click', () => this.goToSlide(index));
            indicators.appendChild(dot);
        });
        
        this.element.appendChild(indicators);

        // Ajouter les boutons de navigation
        const prevBtn = document.createElement('button');
        prevBtn.className = 'carousel-nav prev';
        prevBtn.innerHTML = '<i class="fa-solid fa-chevron-left"></i>';
        prevBtn.addEventListener('click', () => this.prev());

        const nextBtn = document.createElement('button');
        nextBtn.className = 'carousel-nav next';
        nextBtn.innerHTML = '<i class="fa-solid fa-chevron-right"></i>';
        nextBtn.addEventListener('click', () => this.next());

        this.element.appendChild(prevBtn);
        this.element.appendChild(nextBtn);

        // Initialiser le premier article
        this.updateCarousel();
    }

    updateCarousel() {
        this.articles.forEach((article, index) => {
            if (index === this.currentIndex) {
                article.style.display = 'flex';
            } else {
                article.style.display = 'none';
            }
        });

        // Mettre à jour les indicateurs
        const dots = this.element.querySelectorAll('.carousel-dot');
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === this.currentIndex);
        });
    }

    next() {
        this.currentIndex = (this.currentIndex + 1) % this.articles.length;
        this.updateCarousel();
    }

    prev() {
        this.currentIndex = (this.currentIndex - 1 + this.articles.length) % this.articles.length;
        this.updateCarousel();
    }

    goToSlide(index) {
        this.currentIndex = index;
        this.updateCarousel();
    }
}

// Initialiser le carrousel et les animations
document.addEventListener('DOMContentLoaded', () => {
    initAnimations();
    if (!isMobile()) {
        const carousel = new Carousel(document.getElementById('ContentCarr'));
    }
});

// Réinitialiser les animations lors du redimensionnement
window.addEventListener('resize', () => {
    initAnimations();
});
