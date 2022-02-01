const sliderBtns = document.querySelectorAll('.btn'),
        sliderContainer = document.querySelector('.slider__container'),
        slider = document.querySelector('.slider'),
        slide = [...document.querySelectorAll('.slide')];

let currentSliderIndex = 0;

function moveSlider(direction){
    
    if(direction === 'next'){

        currentSliderIndex++;
        
        if(currentSliderIndex === slide.length){
    
            currentSliderIndex = 0;
        }

        slider.style.transform = `translateX(-${ 100 * currentSliderIndex}%`;

    } else {

        if(currentSliderIndex === 0) {
    
            currentSliderIndex = slide.length - 1;
            
        } else {

            currentSliderIndex--;

        }

        slider.style.transform = `translateX(-${100 * currentSliderIndex}%)`;

    }
    
}

function handleBtnClick(button) {

    console.log(button.currentTarget.id)
    button.currentTarget.id === 'next' ? moveSlider('next') : moveSlider('previous');

}


sliderBtns.forEach((btn) => {

    btn.addEventListener('click', handleBtnClick);

});