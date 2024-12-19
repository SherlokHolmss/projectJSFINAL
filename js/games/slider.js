const slides = document.querySelectorAll('.slide');
const lines = document.querySelectorAll('.line');  
const sliderLines = document.querySelectorAll('.slider-line');  
const prev = document.getElementById('prev');
const next = document.getElementById('next');
let currentIndex = 0;

function updateSliderCallback(index) {
    slides.forEach((slide, i) => {
        if (slide) {
            slide.classList.toggle('active', i === index);
        }
    });

    lines.forEach((line, i) => {  
        if (line) {
            line.classList.toggle('active', i === index);
        }
    });

    sliderLines.forEach((sliderLine, i) => {  
        if (sliderLine) {
            sliderLine.classList.toggle('active', i === index);
        }
    });

    prev.disabled = index === 0;
    next.disabled = index === slides.length - 1;
}

prev.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateSliderCallback(currentIndex);
    }
});

next.addEventListener('click', () => {
    if (currentIndex < slides.length - 1) {
        currentIndex++;
        updateSliderCallback(currentIndex);
    }
});

lines.forEach((line, i) => {  
    line.addEventListener('click', () => {  
        currentIndex = i;
        updateSliderCallback(currentIndex);
    });
});

sliderLines.forEach((sliderLine, i) => {  
    sliderLine.addEventListener('click', () => {  
        currentIndex = i;
        updateSliderCallback(currentIndex);
    });
});

updateSliderCallback(currentIndex);
