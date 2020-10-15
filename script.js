//==================== DONE=============================

// Als gebruiker wil ik op één van de kleuren kunnen klikken.
// Elk item in het menu is één kleur.
// Als gebruiker wil ik in het uitgeklapte menu een keuze hebben aan kleuren (uitgeschreven in tekst).
// Wanneer ik als gebruiker op de kleur in het menu heb geklikt verandert de achtergrondkleur van de gehele pagina in de aangeklikte kleur.
// Als gebruiker wil ik niet alleen de kleurennamen lezen, ik wil ook de kleuren kunnen zien in het menu. Elke "rij" in het menu heeft een kleur.
// Als gebruiker wil ik de naast de veranderende achtergrondkleur ook de uitgeschreven naam van de achtergrondkleur op de achtergrond zien wanneer ik deze heb aangeklikt.
// Als gebruiker wil ik op een radiobutton kunnen klikken van de kleur van mijn keuze, waardoor ik aan de radiobutton zie wat de huidige kleur is die "actief" is op dit moment.
// Wanneer ik als gebruiker op de kleur in het menu klik, klapt het menu weer terug in.
// Als gebruiker wil ik in plaats van klikken met mijn muis over de hamburger kunnen hoveren, waardoor het menu verschijnt. Wanneer ik als gebruiker met mijn muis weer weg ga bij de hamburger verdwijnt het menu weer.
// Verander de kleuren door het gebruik van keyboard toetsen (1 voor home, 2 voor rood, 3 voor oranje, etc.) ⇒ ****hier heb je dus een nieuw Event Type nodig...
// Als gebruiker wil ik het menu langzaam in beeld zien schuiven en weer uit beeld zien schuiven, in plaats van plotseling verschijnen (doe dit met CSS transitions). (de richting maakt niet uit!)

//====================TO DO=============================

//NOTE: geen voorstander van css transitions op menu

//DONE :)


//===================STORAGE============================

const toggle = document.querySelector('#menuToggle') //assign toggle button
let menu = document.querySelector('.colorMenu') // retrieve menu
const options = document.querySelectorAll('.colorMenu__item') // menu items
const bgText = document.getElementById("nameDisplay") // background text

const radio = document.getElementById("radioDisplay").children // radio buttons
const radioBtn = Array.from(radio); // makes array from html collection

// assign color menu buttons
const homeBtn = options[0];
const redBtn = options[1];
const orangeBtn = options[2];
const purpleBtn = options[3];
const greenBtn = options[4];

//==================General Functions==========================

// remove all active class function
const delActiveClass = () => {
    options.forEach(item => item.classList.remove('colorMenu__item--active')); // remove all active classes
}
//-------------------------------------
const displayMenu = () => { //add expand class to menu
    menu.classList.add('colorMenu--expand');
}

toggle.addEventListener("mouseenter", displayMenu); // Hover hamburger to display

//-------------------------------------
const removeMenu = () => { //Remove/reset expand class to menu
    menu.classList.remove('colorMenu--expand');
}

menu.addEventListener("mouseleave", removeMenu); // Exit MENU-ITEMS hover to remove menu display
//-------------------------------------

const toggleMenu = () => { // Toggle menu class to menu
    menu.classList.toggle('colorMenu--expand');
}

toggle.addEventListener("click", toggleMenu); // OPTIONAL -CLICK- TO TOGGLE MENU class

//-------------------------------------

const removeRadio = () => { //Remove/reset active checked radio button
    radioBtn.forEach(item => item.removeAttribute("checked"));
}


//==================COLOR BUTTONS====================

// Add Home/White button
const bgHome = () => {
    document.body.style.backgroundColor = "#FFFFFF"; // change background color
    bgText.innerHTML = "The home page has a white background!"; // Change text
    bgText.style.color = 'black'; // change text color
    delActiveClass();
    removeMenu();
    removeRadio();
    radio[0].setAttribute("checked", "true"); // adds checked attribute to radio btn
    homeBtn.classList.add('colorMenu__item--active'); // adds active class to btn
}
homeBtn.addEventListener("click", bgHome);

// Add Red button
const bgRed = () => {
    document.body.style.backgroundColor = "#DC143C";
    bgText.innerHTML = "A Red<br/>Background!";
    bgText.style.color = 'white';
    delActiveClass();
    removeMenu();
    removeRadio();
    radio[1].setAttribute("checked", "true");
    redBtn.classList.add('colorMenu__item--active');
}
redBtn.addEventListener("click", bgRed);

//Add Orange button
const bgOrange = () => {
    document.body.style.backgroundColor = "#FF8C00";
    bgText.innerHTML = "An Orange Background!";
    bgText.style.color = 'white';
    delActiveClass();
    removeMenu();
    removeRadio();
    radio[2].setAttribute("checked", "true");
    orangeBtn.classList.add('colorMenu__item--active');
}
orangeBtn.addEventListener("click", bgOrange);

//Add Purple button
const bgPurple = () => {
    document.body.style.backgroundColor = "#BA55D3";
    bgText.innerHTML = "A Purple Background!";
    bgText.style.color = 'white';
    delActiveClass();
    removeMenu();
    removeRadio();
    radio[3].setAttribute("checked", "true");
    purpleBtn.classList.add('colorMenu__item--active');
}
purpleBtn.addEventListener("click", bgPurple);

//Add Green button
const bgGreen = () => {
    document.body.style.backgroundColor = "#00FF7F";
    bgText.innerHTML = "A Green<br/>Background!";
    bgText.style.color = 'black';
    delActiveClass();
    removeMenu();
    removeRadio();
    radio[4].setAttribute("checked", "true");
    greenBtn.classList.add('colorMenu__item--active');
}
greenBtn.addEventListener("click", bgGreen);


//===================RADIO BUTTONS FUNCTIONS===========================
// run function when using radio buttons
radio[0].addEventListener("click", bgHome);
radio[1].addEventListener("click", bgRed);
radio[2].addEventListener("click", bgOrange);
radio[3].addEventListener("click", bgPurple);
radio[4].addEventListener("click", bgGreen);

//===================KEYBOARD FUNCTIONS===========================
// run function when using keynumbers 
// note: Could also use "keyup" to not repeat funtion if holding down button
//       but "keydown" is faster/more responsive

document.addEventListener('keydown', function (event) {
    if (event.key === '1') {
        bgHome();
    }
});

document.addEventListener('keydown', function (event) {
    if (event.key === '2') {
        bgRed();
    }
});
document.addEventListener('keydown', function (event) {
    if (event.key === '3') {
        bgOrange();
    }
});
document.addEventListener('keydown', function (event) {
    if (event.key === '4') {
        bgPurple();
    }
});
document.addEventListener('keydown', function (event) {
    if (event.key === '5') {
        bgGreen();
    }
});
