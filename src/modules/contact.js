function createContact() {
    const contacts = document.createElement("div");
    contacts.classList.add("contacts");

    const title = document.createElement("h2");
    title.textContent = "Contacts";

    const address = document.createElement("p");
    address.textContent = "Address: Hollywood Boulevard 42, Los Angeles, USA"

    const phone = document.createElement("p");
    phone.textContent = "Dial: 123-456-7890"

    const open = document.createElement("p");
    open.textContent = "Open: 10AM - 6PM"

    contacts.appendChild(title);
    contacts.appendChild(address);
    contacts.appendChild(phone);
    contacts.appendChild(open);

    return contacts;
}

function loadContact() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createContact());
}

export default loadContact;