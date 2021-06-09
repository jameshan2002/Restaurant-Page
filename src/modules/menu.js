function createMenu()
{
    const menu = document.createElement("div");
    menu.classList.add("menu");

    menu.appendChild(createMenuItems("Pizza", 5.99, "A Peperoni Pizza that you cannot have in other places!"));
    menu.appendChild(createMenuItems("Pasta", 7.99, "A Tomato Pasta that you cannot have in other places!"));
    menu.appendChild(createMenuItems("Soup", 3.99, "A Sausage Soup that you cannot have in other places!"));
    menu.appendChild(createMenuItems("Lasagna", 5.99, "A Classic Lasagna that you cannot have in other places!"));

    return menu;
}

function createMenuItems(name, price, description)
{
    const menuItems = document.createElement("div");
    menuItems.classList.add("menuItem");

    const menuName = document.createElement("h3");
    menuName.textContent = name;

    const menuPrice = document.createElement("p");
    menuPrice.classList.add("price");
    menuPrice.textContent = `$${price}`;

    const menuDesc = document.createElement("p");
    menuDesc.classList.add("desc");
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