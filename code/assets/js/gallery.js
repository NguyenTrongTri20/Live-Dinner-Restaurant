
(()=>{
    const closeModalElement = document.querySelector('.close-slide-icon')
    const gallery = [...document.querySelectorAll('.gallery-item')]
    gallery.map((item, index)=>{
        item.onclick = ()=>{
            controlModal(true, index)
        }
    })
    
    closeModalElement.onclick = ()=>{
        controlModal(false)
    }
})();

function controlModal(open = true, index = 0){
    const overlayElement = document.querySelector('.overlay.gallery-section')
    const body = document.body
    
    const slides = [...document.querySelectorAll("#gallery-slide .carousel-item")]
    if(open){
        overlayElement.classList.add('open')
        body.classList.add('modal-open')
    }else{
        overlayElement.classList.remove('open')
        body.classList.remove('modal-open')
    }

    slides.forEach(slide => {
        slide.classList.remove('active')
    })
    //display selected image
    slides[index].classList.add('active')
}

