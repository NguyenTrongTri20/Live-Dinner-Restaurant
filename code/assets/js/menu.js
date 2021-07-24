//selected tab
let linkActive = document.querySelector(".link.selected")

const data = {
    drinks:[
        {
            image:"img-01.jpg",
            name:"Special drink 1",
            desc:"Sed id magna vitae eros sagittis euismod.",
            price:"$7.79"
        },
        {
            image:"img-02.jpg",
            name:"Special drink 2",
            desc:"Sed id magna vitae eros sagittis euismod.",
            price:"$9.79"
        },
        {
            image:"img-03.jpg",
            name:"Special drink 3",
            desc:"Sed id magna vitae eros sagittis euismod.",
            price:"$10.79"
        }
    ],
    lunch:[
        {
            image:"img-04.jpg",
            name:"Special lunch 1",
            desc:"Sed id magna vitae eros sagittis euismod.",
            price:"$15.79"
        },
        {
            image:"img-05.jpg",
            name:"Special lunch 2",
            desc:"Sed id magna vitae eros sagittis euismod.",
            price:"$18.79"
        },
        {
            image:"img-06.jpg",
            name:"Special lunch 3",
            desc:"Sed id magna vitae eros sagittis euismod.",
            price:"$20.79"
        }
    ],
    dinner:[
        {
            image:"img-07.jpg",
            name:"Special dinner 1",
            desc:"Sed id magna vitae eros sagittis euismod.",
            price:"$25.79"
        },
        {
            image:"img-08.jpg",
            name:"Special dinner 2",
            desc:"Sed id magna vitae eros sagittis euismod.",
            price:"$22.79"
        },
        {
            image:"img-09.jpg",
            name:"Special dinner 3",
            desc:"Sed id magna vitae eros sagittis euismod.",
            price:"$24.79"
        }
    ],
}


const {drinks, lunch, dinner} = data
const allProduct = [...drinks, ...lunch, ...dinner]

;(()=>{
    //all tab control
    const links = document.querySelectorAll(".link")
    links.forEach(link => addEvent(link))
    renderProduct(allProduct)
})();

function renderProduct(listProduct) {
    const tabContent = document.querySelector(".tab-content > .row")
    const elementHTML = listProduct.map(product => (
        `
            <div class="col-lg-4 col-md-6 gx-5 gy-5" >
                <div class="product">
                <img src="./assets/images/${product.image}" class="product-item" alt="${product.name}">
                <div class="product-info">
                    <div class="product-name">${product.name}</div>
                    <div class="product-desc">${product.desc}</div>
                    <div class="product-price">${product.price}</div>
                </div>
                </div>
            </div>
        `
    ))
    tabContent.innerHTML = elementHTML.join("")
}

function addEvent(link){
    link.onclick = ()=> {
        //side bar
        linkActive.classList.remove("selected")
        link.classList.add("selected")
        linkActive = link
        //content
        const menuData = link.id === "all" ? allProduct :  data[linkActive.id]
        renderProduct(menuData)
    }
}

