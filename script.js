let summa = 0;

let elementProdukt = document.createElement("p");
elementProdukt.textContent = "Summa: " + summa;


function adderaProduktenTillVarukorgen(id, pris) {

    let bildProdukt = document.createElement("img");
    bildProdukt.setAttribute("width", '50px');
    bildProdukt.setAttribute("height", '50px');
    bildProdukt.style.paddingBottom = "20px";
    if (id == "Produktbild1") {
        bildProdukt.src = "./images/1.webp";
        bildProdukt.setAttribute("id", "prod1");
        summa = summa + pris;
    } else if (id == "Produktbild2") {
        bildProdukt.src = "./images/2.webp";
        bildProdukt.setAttribute("id", "prod2");
        summa = summa + pris;
    } else if (id == "Produktbild3") {
        bildProdukt.src = "./images/3.webp";
        bildProdukt.setAttribute("id", "prod3");
        summa = summa + pris;
    } else if (id == "Produktbild4") {
        bildProdukt.src = "./images/4.webp";
        bildProdukt.setAttribute("id", "prod4");
        summa = summa + pris;
    } else if (id == "Produktbild5") {
        bildProdukt.src = "./images/5.webp";
        bildProdukt.setAttribute("id", "prod5");
        summa = summa + pris;
    } else if (id == "Produktbild6") {
        bildProdukt.src = "./images/6.webp";
        bildProdukt.setAttribute("id", "prod6");
        summa = summa + pris;
    } else if (id == "Produktbild7") {
        bildProdukt.src = "./images/7.webp";
        bildProdukt.setAttribute("id", "prod7");
        summa = summa + pris;
    } else if (id == "Produktbild8") {
        bildProdukt.src = "./images/8.webp";
        bildProdukt.setAttribute("id", "prod8");
        summa = summa + pris;
    }


    let varukorgRubrik = document.querySelector(".flex-container");
    varukorgRubrik.appendChild(bildProdukt);
    elementProdukt.textContent = "Summa: " + summa;
    varukorgRubrik.appendChild(elementProdukt);
}
