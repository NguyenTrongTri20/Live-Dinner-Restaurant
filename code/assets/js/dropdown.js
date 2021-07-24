
function dropDownCustom(controlId, listId){
    //open or not
    let dropDownState = false
    
    const controlElement = document.querySelector(controlId)
    const listMenuElement = document.querySelector(listId)
    
    controlElement.onclick = ()=>{
        dropDownState = !dropDownState
        listMenuElement.style.display = dropDownState ? 'flex' : "none"
    }
}

dropDownCustom("#Pages-control",'#Pages')
dropDownCustom('#blog-control', '#blog')