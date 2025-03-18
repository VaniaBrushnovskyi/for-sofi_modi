let currentSlideIndex = 1;

function showSlide(index) {
    const slides = document.querySelectorAll(".s4__inner_slide");
    const dots = document.querySelectorAll(".s4__selected_dot-1, .s4__selected_dot-2,.s4__selected_dot-3,.s4__selected_dot-4, .s4__selected_dot-5");

    if (index > slides.length) {
        currentSlideIndex = 1;
    } else if (index < 1) {
        currentSlideIndex = slides.length;
    } else {
        currentSlideIndex = index;
    }

    slides.forEach(slide => {
        slide.style.display = "none";
    });
    slides[currentSlideIndex - 1].style.display = "block";

    dots.forEach(dot => {
        dot.style.backgroundColor = "#bbb";
    });
    dots[currentSlideIndex -1].style.backgroundColor = "#8f8f8f";
}

function plusSlide(nom) {
    showSlide(currentSlideIndex + nom);
}

function currentSlide(nom) {
    showSlide(nom);
}

showSlide(currentSlideIndex);






