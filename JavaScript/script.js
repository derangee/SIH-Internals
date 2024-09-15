async function fetchcplants() {
    let a = await fetch("");
    let response = await a.text();
    let div = document.createElement("div");
    div.innerHTML = response;
    let as = div.getElementsByTagName("a");
    let plants = [];
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith(".svg" || ".png")) {
            plants.push(element.href);
        }
    }
    return plants;
}


async function main() {

}