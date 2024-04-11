const container = document.querySelector(".container");
for(let i = 1; i < 991; i++){
    let createDiv = document.createElement("div");
    createDiv.setAttribute("class", "grid");
    createDiv.textContent = "";
    container.appendChild(createDiv);
    createDiv.style.flexShrink = "1";
    
    createDiv.addEventListener("mouseover",() =>{
        createDiv.style.backgroundColor = "black";
    })
}