function funcProductsCard() {
    const getAllElement = document.querySelectorAll(".cardForm");
    getAllElement.forEach(val => {
        const moreBtn = val.querySelector(".moreBtn");
        
        moreBtn.addEventListener("click", () => {
            const outsideChange = val.querySelector(".outside");
            outsideChange.classList.add("outsideActive");
        
            const boardControl = val.querySelector(".boardControl");
            boardControl.classList.add("boardActive");
        
            const insideChange = val.querySelector(".inside");
            insideChange.classList.add("insideActive");
        
            const funcList = val.querySelector(".back");
            funcList.classList.add("backActive");
        })

        const closeBtn = val.querySelector(".closeBtn");
        
        closeBtn.addEventListener("click", () => {
            const outsideChange = val.querySelector(".outside");
            outsideChange.classList.remove("outsideActive");
        
            const boardControl = val.querySelector(".boardControl");
            boardControl.classList.remove("boardActive");
        
            const insideChange = val.querySelector(".inside");
            insideChange.classList.remove("insideActive");
        
            const funcList = val.querySelector(".back");
            funcList.classList.remove("backActive");
        })
    })
}


products.forEach((val, index) => {
    const product = `
        <div class="cardForm">
            <div class="outside partCard">
                <div class="front">
                    <img class="imgShowcase" src="${val.img}" alt="">
                    <h1 class="nameProduct">${val.nameProduct}</h1>
                    <button class="moreBtn">More</button>
                </div>

                <div class="back">
                    <img class="part" src="https://dejpknyizje2n.cloudfront.net/marketplace/products/49165aa4a10e46ca9db4179d5593b6ae.png" alt="">
                    <ul class="funcList">
                        <li style="--i: 1s;" class="func"><i class="fas fa-microchip"></i> Chức năng của sản phẩm</li>
                        <li style="--i: 2s;" class="func"><i class="fas fa-microchip"></i> Chất lượng sản phẩm</li>
                        <li style="--i: 3s;" class="func"><i class="fas fa-microchip"></i> Kích thước sản phẩm</li>
                        <li style="--i: 4s;" class="func"><i class="fas fa-microchip"></i> Chất liệu sản phẩm</li>
                        <li style="--i: 5s;" class="func"><i class="fas fa-microchip"></i> Chức năng của sản phẩm</li>
                    </ul>

                    <div class="infoBox">
                        <div class="costBox">
                            <h2 class="productCost">$${val.cost}</h2>
                            <div class="productCountBox">
                                <button class="controlProductCount addProduct"><i class="fa-solid fa-plus"></i></button>
                                <input class="productCont--value" type="number">    
                                <button class="controlProductCount removeProduct"><i class="fa-solid fa-minus"></i></button>
                            </div>

                            <button class="buyBtn">Buy</button>
                        </div>
                    </div>

                </div>
            </div>

            <div class="inside partCard">
                <img class="imgMainShowcase" src="${val.img}" alt="">
            </div>

            <div class="boardControl">
                <button class="controlBtn closeBtn"><i class="fas fa-times"></i></button>
            </div>
        </div>
    `;

    document.querySelector(".mainPage").innerHTML += product;

    if(index == (products.length - 1)) {
        funcProductsCard();
        console.log("OK");
    } else {
    }
})
// Change function
const prevBtn = document.querySelector(".prev");

prevBtn.addEventListener("click", () => {
    const getAllElement = document.querySelectorAll(".cardForm");
    const mainPage = document.querySelector(".mainPage");

    mainPage.prepend(getAllElement[getAllElement.length - 1])
})

const nextBtn = document.querySelector(".next");

nextBtn.addEventListener("click", () => {
    const getAllElement = document.querySelectorAll(".cardForm");
    const mainPage = document.querySelector(".mainPage");

    mainPage.appendChild(getAllElement[0]);
    resetCard();
})

function resetCard() {
    const getAllElement = document.querySelectorAll(".cardForm");

    getAllElement.forEach(val => {
        const closeBtn = val.querySelector(".closeBtn");

        if(window.getComputedStyle(closeBtn).opacity == "0") {
            const outsideChange = val.querySelector(".outside");
            outsideChange.classList.remove("outsideActive");
        
            const boardControl = val.querySelector(".boardControl");
            boardControl.classList.remove("boardActive");
        
            const insideChange = val.querySelector(".inside");
            insideChange.classList.remove("insideActive");
        
            const funcList = val.querySelector(".back");
            funcList.classList.remove("backActive");
        }
    })
}