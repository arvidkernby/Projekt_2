let bildProdukt = document.createElement("img");
bildProdukt.src = "./images/1.webp";
bildProdukt.setAttribute("id", "prod1");
bildProdukt.setAttribute("width", '50px');
bildProdukt.setAttribute("height", '50px');

let elementProdukt= document.createElement("p");
elementProdukt.textContent = "En produkt";

//let varukorgRubrik = document.querySelector(".Varukorg");
let varukorgRubrik = document.querySelector(".flex-container");
varukorgRubrik.appendChild(bildProdukt);
varukorgRubrik.appendChild(elementProdukt);
