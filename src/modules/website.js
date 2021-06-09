import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";

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
        loadHome();
    });
    menuButton.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        loadMenu();
    });
    contactButton.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        loadContact();
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

function createFooter() {
    const footer = document.createElement("footer");
    footer.classList.add("footer");

    const created = document.createElement("p");
    created.textContent = "Created by James Han";
    created.classList.add("created");

    const githubLink = document.createElement("a");
    githubLink.href = "https://github.com/jameshan2002";
    githubLink.target = "_blank";

    const githubIcon = document.createElement("i");
    githubIcon.classList.add("fab");
    githubIcon.classList.add("fa-github");

    footer.appendChild(created);
    githubLink.appendChild(githubIcon);
    footer.appendChild(githubLink);

    return footer;
}

function initializeWebsite() {
    const content = document.getElementById("content");

    content.appendChild(createHeader());
    content.appendChild(createMain());
    content.appendChild(createFooter());

    loadHome();
}

export default initializeWebsite;