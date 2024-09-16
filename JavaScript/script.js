const ayuplant = {
    "http://127.0.0.1:3002/png/neem.png": "Neem",
    "http://127.0.0.1:3002/png/amla.png": "Amla",
    "http://127.0.0.1:3002/png/turmeric.png": "Turmeric",
    "http://127.0.0.1:3002/png/ashwagandha.png": "Ashwagandha",
    "http://127.0.0.1:3002/png/shatavari.png": "Shatavari"
}

const naturoplant = {
    "http://127.0.0.1:3002/png/tulsi.png": "Tulsi",
    "http://127.0.0.1:3002/png/Brahmi.png": "Brahmi",
    "http://127.0.0.1:3002/png/giloy.png": "Giloy",
    "http://127.0.0.1:3002/png/Moringa.png": "Moringa",
    "http://127.0.0.1:3002/png/aloe%20vera.png": "Aloe vera"
}


const unaniplant = {
    "http://127.0.0.1:3002/png/Sarpagandha.png": "Sarpagandha",
    "http://127.0.0.1:3002/png/Bael.png": "Bael",
    "http://127.0.0.1:3002/png/Bhringraj.png": "Bhringraj",
    "http://127.0.0.1:3002/png/Arjuna.png": "Arjuna",
    "http://127.0.0.1:3002/png/Punarnava.png": "Punarnava"
}

const siddhaplant = {
    "http://127.0.0.1:3002/png/vasaka.png": "Vasaka",
    "http://127.0.0.1:3002/png/Guggul.png": "Guggul",
    "http://127.0.0.1:3002/png/Manjistha.png": "Manjistha",
    "http://127.0.0.1:3002/png/Nirgundi.png": "Nirgundi",
    "http://127.0.0.1:3002/png/Haritaki.png": "Haritaki"
}

const homeoplant = {
    "http://127.0.0.1:3002/png/Licorice.png": "Licorice",
    "http://127.0.0.1:3002/png/Fenugreek.png": "Fenugreek",
    "http://127.0.0.1:3002/png/Peppermint.png": "Peppermint",
    "http://127.0.0.1:3002/png/Shankhapushpi.png": "Shankhapushpi",
    "http://127.0.0.1:3002/png/Kalmegh.png": "Kalmegh"
}


const ayusci = {
    "http://127.0.0.1:3002/png/neem.png": "Azadirachta indica",
    "http://127.0.0.1:3002/png/amla.png": "Phyllanthus emblica",
    "http://127.0.0.1:3002/png/turmeric.png": "Curcuma longa",
    "http://127.0.0.1:3002/png/ashwagandha.png": "Withania somnifera",
    "http://127.0.0.1:3002/png/shatavari.png": "Asparagus racemosus"
}

const naturosci = {
    "http://127.0.0.1:3002/png/tulsi.png": "Ocimum tenuiflorum",
    "http://127.0.0.1:3002/png/Brahmi.png": "Bacopa monnieri",
    "http://127.0.0.1:3002/png/giloy.png": "Tinospora cordifolia",
    "http://127.0.0.1:3002/png/Moringa.png": "Moringa oleifera",
    "http://127.0.0.1:3002/png/aloe%20vera.png": "Aloe barbadensis miller"
}

const unanisci = {
    "http://127.0.0.1:3002/png/Sarpagandha.png": "Rauvoflia serpentina",
    "http://127.0.0.1:3002/png/Bael.png": "Aegle marmelos",
    "http://127.0.0.1:3002/png/Bhringraj.png": "Eclipta prostrata",
    "http://127.0.0.1:3002/png/Arjuna.png": "Terminalia arjuna",
    "http://127.0.0.1:3002/png/Punarnava.png": "Boerhavia diffusa"
}

const siddhasci = {
    "http://127.0.0.1:3002/png/vasaka.png": "Justicia adhatoda",
    "http://127.0.0.1:3002/png/Guggul.png": "Commiphora wightii",
    "http://127.0.0.1:3002/png/Manjistha.png": "Ruba cardifolia",
    "http://127.0.0.1:3002/png/Nirgundi.png": "Vitex negundo",
    "http://127.0.0.1:3002/png/Haritaki.png": "Terminalia chebula"
}

const homeosci = {
    "http://127.0.0.1:3002/png/Licorice.png": "Glycyrrhiza glabra",
    "http://127.0.0.1:3002/png/Fenugreek.png": "Trigonella foenum-graceum",
    "http://127.0.0.1:3002/png/Peppermint.png": "Mentha piperita",
    "http://127.0.0.1:3002/png/Shankhapushpi.png": "Convolvulus prostratus",
    "http://127.0.0.1:3002/png/Kalmegh.png": "Andrographis paniculata"
}





async function fetchplants() {
    let a = await fetch("http://127.0.0.1:3002/png/");
    let response = await a.text();
    let div = document.createElement("div");
    div.innerHTML = response;
    console.log(div)
    let plants = [];
    let as = div.getElementsByTagName("a");
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith(".svg") || element.href.endsWith(".png") || element.href.endsWith("../")) {
            plants.push(element.href);
        }
    }
    return plants;
}



async function main() {
    let plants = await fetchplants()


    for (plant of plants) {
        const plantname = ayuplant[plant] || naturoplant[plant] || unaniplant[plant] || siddhaplant[plant] || homeoplant[plant]
        const plantsci = ayusci[plant] || naturosci[plant] || unanisci[plant] || siddhasci[plant] || homeosci[plant]

        card = document.querySelector(".cardcontainer")
        card.innerHTML = card.innerHTML + `<div class="plantcontainer">
            <div class="plantimg">
                <img src="${plant}" alt="Neem Plant">
            </div>
            <h4 class="plantname">${plantname}</h4>
            <h5 class="plantinfo">${plantsci}</h5>
        </div>`
    }

    let x = document.querySelector(".btn-know-more")

    x.addEventListener("click", () => {
        const container2 = document.querySelector(".container2");

        container2.style.display = "block";
        container2.offsetHeight;
        container2.classList.add("show");

        document.querySelectorAll(".display").forEach(element => {
            element.style.display = "none";
        });
    });


    document.getElementById("ayurveda").addEventListener("click", ()=>{
        document.querySelectorAll(".con").forEach(e=>{
            e.style.display = "none"
        })

        document.querySelector(".ayu").style.display = "block"
    })

    document.getElementById("naturopathy").addEventListener("click", ()=>{
        document.querySelectorAll(".con").forEach(e=>{
            e.style.display = "none"
        })

        document.querySelector(".naturo").style.display = "block"
    })


    document.getElementById("unani").addEventListener("click", ()=>{
        document.querySelectorAll(".con").forEach(e=>{
            e.style.display = "none"
        })

        document.querySelector(".unan").style.display = "block"
    })

    document.getElementById("siddha").addEventListener("click", ()=>{
        document.querySelectorAll(".con").forEach(e=>{
            e.style.display = "none"
        })

        document.querySelector(".sid").style.display = "block"
    })

    document.getElementById("homeopathy").addEventListener("click", ()=>{
        document.querySelectorAll(".con").forEach(e=>{
            e.style.display = "none"
        })

        document.querySelector(".homeo").style.display = "block"
    })

    document.querySelector(".soundneem").addEventListener("click", () => {
        let audio = new Audio("http://127.0.0.1:3002/audio/Neem.mp3");
        audio.play();
    });

    document.querySelector(".soundash").addEventListener("click", () => {
        let audio = new Audio("http://127.0.0.1:3002/audio/Aswagandha.mp3");
        audio.play();
    });

}



main()
