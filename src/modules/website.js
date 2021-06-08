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
    const menus = document.createElement("nav");

    const homeButton = document.createElement("button");
    const menuButton = document.createElement("button");
    const contactButton = document.createElement("button");

    homeButton.textContent = "home";
    menuButton.textContent = "menu";
    contactButton.textContent = "contact";

    homeButton.classList.add("button-nav");
    menuButton.classList.add("button-nav");
    contactButton.classList.add("button-nav");

    homeButton.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(homeButton);
        loadHome();
      });

    menus.appendChild(homeButton);
    menus.appendChild(menuButton);
    menus.appendChild(contactButton);

    return menus;
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