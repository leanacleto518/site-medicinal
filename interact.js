// ===== PESQUISA DE SINTOMAS =====
const symptomsDatabase = [
    {
        name: "Dor de Cabeça",
        keywords: ["cabeça", "cefaleia", "enxaqueca", "dor de cabeça", "migraine"],
        description: "Tratamento natural para dores de cabeça e enxaquecas",
        link: "tratamentos/remedio-dor-cabeca.html",
        icon: "🤕"
    },
    {
        name: "Dor Abdominal",
        keywords: ["abdominal", "barriga", "estômago", "abdomen", "dor de barriga", "dor de estômago"],
        description: "Alívio natural para dores abdominais e estomacais",
        link: "tratamentos/remedio-dor-abdominal.html",
        icon: "🤰"
    },
    {
        name: "Dor de Dente",
        keywords: ["dente", "dental", "dor de dente", "odontalgia", "molar"],
        description: "Tratamento natural para dores dentárias",
        link: "tratamentos/remedio-dor-no-dente.html",
        icon: "🦷"
    },
    {
        name: "Dor nos Olhos",
        keywords: ["olhos", "vista", "ocular", "dor nos olhos", "visão"],
        description: "Alívio natural para desconfortos oculares",
        link: "tratamentos/remedio-dor-nos-olhos.html",
        icon: "👁️"
    },
    {
        name: "Dor de Garganta",
        keywords: ["garganta", "pescoço", "dor de garganta", "faringite", "amigdalite"],
        description: "Tratamento natural para dores de garganta",
        link: "#",
        icon: "🗣️"
    },
    {
        name: "Dor Muscular",
        keywords: ["muscular", "músculo", "dor muscular", "mialgia", "contusão"],
        description: "Alívio natural para dores musculares",
        link: "#",
        icon: "💪"
    },
    {
        name: "Dor nas Articulações",
        keywords: ["articulações", "juntas", "artrite", "dor nas juntas", "reumatismo"],
        description: "Tratamento natural para dores articulares",
        link: "#",
        icon: "🦴"
    },
    {
        name: "Dor nas Costas",
        keywords: ["costas", "coluna", "lombar", "dor nas costas", "lombalgia"],
        description: "Alívio natural para dores nas costas",
        link: "#",
        icon: "🏃"
    },
    {
        name: "Dor no Coração",
        keywords: ["coração", "peito", "cardíaco", "dor no peito", "angina"],
        description: "Cuidados naturais para desconfortos cardíacos",
        link: "#",
        icon: "❤️"
    },
    {
        name: "Dor no Ouvido",
        keywords: ["ouvido", "orelha", "dor de ouvido", "otite", "auricular"],
        description: "Tratamento natural para dores de ouvido",
        link: "#",
        icon: "👂"
    }
];

function initializeSearch() {
    const searchInput = document.getElementById('symptom-search');
    const searchResults = document.getElementById('search-results');
    
    if (!searchInput || !searchResults) {
        console.log('Elementos de pesquisa não encontrados:', {
            searchInput: !!searchInput,
            searchResults: !!searchResults
        });
        return;
    }

    console.log('Inicializando pesquisa de sintomas...');
    let searchTimeout;

    function performSearch(query) {
        if (!query.trim()) {
            hideResults();
            return;
        }

        const results = symptomsDatabase.filter(symptom => {
            return symptom.keywords.some(keyword => 
                keyword.toLowerCase().includes(query.toLowerCase())
            ) || symptom.name.toLowerCase().includes(query.toLowerCase());
        });

        displayResults(results, query);
    }

    function displayResults(results, query) {
        if (results.length === 0) {
            searchResults.innerHTML = `
                <div class="search-no-results">
                    <i class="bi bi-search"></i>
                    <div>Nenhum sintoma encontrado para "${query}"</div>
                    <small>Tente usar outras palavras-chave</small>
                </div>
            `;
        } else {
            searchResults.innerHTML = results.map(symptom => `
                <a href="${symptom.link}" class="search-result-item" onclick="trackSearchClick('${symptom.name}')">
                    <div class="search-result-icon">${symptom.icon}</div>
                    <div class="search-result-text">
                        <div class="search-result-title">${symptom.name}</div>
                        <div class="search-result-description">${symptom.description}</div>
                    </div>
                </a>
            `).join('');
        }
        
        showResults();
    }

    function showResults() {
        searchResults.classList.add('show');
    }

    function hideResults() {
        searchResults.classList.remove('show');
    }

    // Event listeners
    searchInput.addEventListener('input', (e) => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            performSearch(e.target.value);
        }, 300);
    });

    searchInput.addEventListener('focus', (e) => {
        if (e.target.value.trim()) {
            performSearch(e.target.value);
        }
    });

    // Fechar resultados quando clicar fora
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-wrapper')) {
            hideResults();
        }
    });

    // Limpar pesquisa com ESC
    searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            searchInput.value = '';
            hideResults();
            searchInput.blur();
        }
    });
}

function trackSearchClick(symptomName) {
    console.log(`Usuário clicou em: ${symptomName}`);
    // Aqui você pode adicionar analytics se necessário
}

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

    if (!slideImg || !slideLink || !btnPrev || !btnNext) {
        console.log('Elementos de sintomas não encontrados:', {
            slideImg: !!slideImg,
            slideLink: !!slideLink,
            btnPrev: !!btnPrev,
            btnNext: !!btnNext
        });
        return;
    }

    console.log('Inicializando navegação de sintomas...');

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
        carrosselInterval = setInterval(nextSlide, 6000); // 6 segundos como solicitado
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
    // Garantir que os elementos existam antes de inicializar
    console.log('Inicializando funcionalidades...');
    
    initializeSearch();
    initializeCarrossel();
    initializeSintomas();
    
    // Verificar se os elementos foram criados corretamente
    const searchInput = document.getElementById('symptom-search');
    const prevButton = document.getElementById('prev-button');
    const nextButton = document.getElementById('next-button');
    
    console.log('Search input:', searchInput ? 'OK' : 'ERRO');
    console.log('Prev button:', prevButton ? 'OK' : 'ERRO');
    console.log('Next button:', nextButton ? 'OK' : 'ERRO');
    
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
