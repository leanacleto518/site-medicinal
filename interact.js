// ===== SINTOMAS FUNCTIONALITY =====
const sintomas = [
    {
        img: "imgsintoma/dor de cabeça (1).png",
        link: "tratamentos/remedio-dor-cabeca.html",
        alt: "Dor de cabeça"
    },
    {
        img: "imgsintoma/dor nos olhos.png",
        link: "tratamentos/remedio-dor-nos-olhos.html",
        alt: "Dor nos olhos"
    },
    {
        img: "imgsintoma/dor abdominal.png",
        link: "tratamentos/remedio-dor-abdominal.html",
        alt: "Dor abdominal"
    },
    {
        img: "imgsintoma/dor de dente.png",
        link: "tratamentos/remedio-dor-no-dente.html",
        alt: "Dor de dente"
    }
];

let sintomaIndex = 0;

function initializeSintomas() {
    const slideImg = document.querySelector('.dores');
    const slideLink = document.getElementById('slide-link');
    const btnPrev = document.getElementById('prev-button');
    const btnNext = document.getElementById('next-button');

    if (!slideImg || !slideLink || !btnPrev || !btnNext) return;

    function updateSlide() {
        slideImg.classList.remove('on');

        setTimeout(() => {
            slideImg.src = sintomas[sintomaIndex].img;
            slideImg.alt = sintomas[sintomaIndex].alt;
            slideLink.href = sintomas[sintomaIndex].link;
            slideImg.classList.add('on');
        }, 150);
    }

    btnNext.addEventListener('click', () => {
        sintomaIndex = (sintomaIndex + 1) % sintomas.length;
        updateSlide();
    });

    btnPrev.addEventListener('click', () => {
        sintomaIndex = (sintomaIndex - 1 + sintomas.length) % sintomas.length;
        updateSlide();
    });

    // Inicializar primeiro slide
    updateSlide();
}

// ===== CARROSSEL FUNCTIONALITY =====
let currentSlideIndex = 0;
let carrosselInterval;

function initializeCarrossel() {
    const slides = document.querySelectorAll('.slide');
    const indicators = document.querySelectorAll('.indicator');
    
    if (slides.length === 0) return;

    function updateCarrossel() {
        const carrossel = document.querySelector('.carrossel');
        if (!carrossel) return;
        
        carrossel.style.transform = `translateX(-${currentSlideIndex * 100}%)`;
        
        // Atualizar indicadores
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentSlideIndex);
        });
    }

    function nextSlide() {
        currentSlideIndex = (currentSlideIndex + 1) % slides.length;
        updateCarrossel();
    }

    function previousSlide() {
        currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
        updateCarrossel();
    }

    function currentSlide(slideNumber) {
        currentSlideIndex = slideNumber - 1;
        updateCarrossel();
    }

    function startCarrosselAutoPlay() {
        carrosselInterval = setInterval(nextSlide, 4000); // 4 segundos como solicitado
    }

    function stopCarrosselAutoPlay() {
        clearInterval(carrosselInterval);
    }

    // Tornar funções globais para os botões HTML
    window.nextSlide = nextSlide;
    window.previousSlide = previousSlide;
    window.currentSlide = currentSlide;

    // Inicializar carrossel
    updateCarrossel();
    startCarrosselAutoPlay();
    
    // Pausar auto-play quando hover no carrossel
    const carrosselContainer = document.querySelector('.carrossel-container');
    if (carrosselContainer) {
        carrosselContainer.addEventListener('mouseenter', stopCarrosselAutoPlay);
        carrosselContainer.addEventListener('mouseleave', startCarrosselAutoPlay);
    }
}

// ===== INICIALIZAÇÃO ===== 
document.addEventListener('DOMContentLoaded', function() {
    initializeCarrossel();
    initializeSintomas();
    
    // Adicionar efeitos de entrada suaves
    const elements = document.querySelectorAll('.beneficio-card, .destaque-section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });

    elements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
});
