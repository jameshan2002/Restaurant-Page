import loadHome from "./home";

function createHeader() {
    const header = document.createElement("header");
    header.classList.add("header");

    const name = document.createElement("h1");
    name.classList.add("name");
    name.textContent = "Maraziro";

    header.appendChild(name);
    header.appendChild(createNav());

    return header;
}

function createNav() {
    
}

function createMain() {
    const main = document.createElement("main");
    main.classList.add("main");
    main.setAttribute("id", "main");
    return main;
}

function initializeWebsite() {
    const content = document.getElementById("content");

    content.appendChild(createHeader());
    content.appendChild(createMain());
    // content.appendChild(createFooter());

    //setActiveButton(document.querySelector(".button-nav"));
    loadHome();
}

export default initializeWebsite;