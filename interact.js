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

const slideImg = document.querySelector('.dores');
const slideLink = document.getElementById('slide-link');
const btnPrev = document.getElementById('prev-button');
const btnNext = document.getElementById('next-button');

let index = 0;

function updateSlide() {
    slideImg.classList.remove('on');

    setTimeout(() => {
        slideImg.src = sintomas[index].img;
        slideImg.alt = sintomas[index].alt;
        slideLink.href = sintomas[index].link;
        slideImg.classList.add('on');
    }, 100);
}

btnNext.addEventListener('click', () => {
    index = (index + 1) % sintomas.length;
    updateSlide();
});

btnPrev.addEventListener('click', () => {
    index = (index - 1 + sintomas.length) % sintomas.length;
    updateSlide();
});

updateSlide();
