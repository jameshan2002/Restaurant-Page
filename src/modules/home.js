function createHome() {
    const about = document.createElement('div');
    about.classList.add('about');

    const subTitle = document.createElement('h3');
    subTitle.classList.add('subTitle');
    subTitle.textContent = 'Welcome to Maraziro!';
    about.appendChild(subTitle);

    about.appendChild(createParagraph("We have all the pizzas and special italian foods you have never tried!"));
    about.appendChild(createParagraph("Come to our restaurant to experience the italian food!"));
    about.appendChild(createParagraph("Please contact us or come to our address!"));

    return about;
}

function createParagraph(text) {
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    return paragraph;
}

function loadHome() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createHome());
}


export default loadHome;