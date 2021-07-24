(()=>{
    const times = ["12:00","01:00","02:00","03:00","04:00","05:00","06:00","07:00","08:00","09:00"]

    const timeSelectElement = document.querySelector('#time')
    const personAmountSelectElement = document.querySelector('#person')

    const selectList = [timeSelectElement, personAmountSelectElement]

    // select time
    times.forEach(time => {
        let optionElement = document.createElement('option')
        optionElement.value = time
        optionElement.textContent = time
        timeSelectElement.appendChild(optionElement)
    })
    //select person
    for(let i = 1; i < 11; i++){
        let optionElement = document.createElement('option')
        optionElement.value = i
        optionElement.textContent = i
        personAmountSelectElement.appendChild(optionElement)
    }

    //remove message when select valid
    selectList.forEach(selectElement =>{
        selectElement.onchange = ()=>{
            selectElement.classList.remove('is-invalid')
        }
    })
    
    
})();