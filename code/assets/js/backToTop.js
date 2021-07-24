(()=>{
    const backToTopButton = document.querySelector(".back-to-top")
    const body = document.body

    if(document.documentElement.scrollTop === 0){
        backToTopButton.style.display = "none"
    }

    body.onscroll = ()=>{
        if(document.documentElement.scrollTop > 500 ){
            backToTopButton.style.display = "block"
        }else{
            backToTopButton.style.display = "none"
        }
    }

    backToTopButton.onclick = () => {
        document.documentElement.scrollTop = 0
    }
})();

