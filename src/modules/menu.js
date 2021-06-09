function createMenu()
{
    const menu = document.createElement("div");
    menu.classList.add("menu");

    menu.appendChild(createMenuItems("Pizza", 5.99, "Peperoni Pizza that you cannot have in other places!"));

    return menu;
}

function createMenuItems(name, price, description)
{
    const menuItems = document.createElement("div");
    menuItems.classList.add("menuItem");

    const menuName = document.createElement("h3");
    menuName.textContent = name;

    const menuPrice = document.createElement("p");
    menuPrice.textContent = `$ ${price}`;

    const menuDesc = document.createElement("p");
    menuDesc.textContent = description;

    const menuPicture = document.createElement("img");
    menuPicture.src = `image/menu/${name.toLowerCase()}.jpg`;
    menuPicture.alt = `${name}`;

    menuItems.appendChild(menuName);
    menuItems.appendChild(menuPrice);
    menuItems.appendChild(menuPicture);
    menuItems.appendChild(menuDesc);

    return menuItems;
}

function loadMenu()
{
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createMenu());
}

export default loadMenu;