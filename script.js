const container = document.querySelector(".container");



for(let i = 1; i < 991; i++){
    let createDiv = document.createElement("div");
    createDiv.setAttribute("class", "grid");
    createDiv.textContent = "";
    container.appendChild(createDiv);
    createDiv.style.flexShrink = "1";
    createDiv.style.backgroundColor = "lightgray";
    
    createDiv.addEventListener("mouseover",() =>{
        createDiv.style.backgroundColor = "transparent";
        createDiv.style.borderStyle="inset";
    })

    let clearBtn = document.querySelector("#reset");
    clearBtn.addEventListener("click", () =>{
        createDiv.style.backgroundColor = "lightgray";
        createDiv.style.borderStyle="solid";
    })
    
    
}

function shake() {
    let shake = document.querySelector(".shakebox");
    shake.setAttribute("class","shake");

    let shakeBtn = document.querySelector("#reset");
    shakeBtn.textContent ="Reset";
}