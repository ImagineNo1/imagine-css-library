// Elements

const navbar = document.querySelector('#navbar')
const offcanvas = document.querySelector('#offcanvas')
const modals = document.querySelector('#modals')
const gridsystem = document.querySelector('#gridsystem')
const utilities = document.querySelector('#utilities')
const card = document.querySelector('#card')
const Forms = document.querySelector('#Forms')
const Buttons = document.querySelector('#Buttons')
const closee = document.querySelector('#close')
/////////////////////
const margin = document.querySelector('#margin')
const font = document.querySelector('#font')
const border = document.querySelector('#border')
const position = document.querySelector('#position')
const animation = document.querySelector('#animation')
const height = document.querySelector('#height')
/////////////////////////
const navbarC = document.querySelector('#navbarC')
const offcanvasC = document.querySelector('#offcanvasC')
const modalsC = document.querySelector('#modalsC')
const gridSystemD = document.querySelector('#gridsystemC')
const utilitiesC = document.querySelector('#utilitiesC')
const cardC = document.querySelector('#cardC')
const FormsC = document.querySelector('#FormsC')
const ButtonsC = document.querySelector('#ButtonsC')
const closeC = document.querySelector('#closeC')
//////////////////////////
const marginC = document.querySelector('#marginC')
const fontC = document.querySelector('#fontC')
const borderC = document.querySelector('#borderC')
const positionC = document.querySelector('#positionC')
const animationC = document.querySelector('#animationC')
const heightC = document.querySelector('#heightC')
/////////////////////////
navbar.style.border = "3px solid black";
marginC.style.display = 'block';
margin.style.border = "3px solid black";

// Functions 


const navbarShow = () => {
    navbarC.style.display = 'block';
    navbar.style.border = "3px solid black";
    offcanvasC.style.display = 'none';
    modalsC.style.display = 'none';
    gridSystemD.style.display = 'none'
    utilitiesC.style.display = 'none';
    cardC.style.display = 'none';
    FormsC.style.display = 'none';
    ButtonsC.style.display = 'none';
    closeC.style.display = 'none';

    offcanvas.style.border = "";
    modals.style.border = "";
    gridsystem.style.border = "";
    utilities.style.border = "";
    card.style.border = "";
    Forms.style.border = "";
    Buttons.style.border = "";
    closee.style.border = "";

}
const offcanshow = () => {
    navbarC.style.display = 'none';
    offcanvasC.style.display = 'block';
    offcanvas.style.border = "3px solid black";
    modalsC.style.display = 'none';
    gridSystemD.style.display = 'none'
    utilitiesC.style.display = 'none';
    cardC.style.display = 'none';
    FormsC.style.display = 'none';
    ButtonsC.style.display = 'none';
    closeC.style.display = 'none';

    navbar.style.border = "";
    modals.style.border = "";
    gridsystem.style.border = "";
    utilities.style.border = "";
    card.style.border = "";
    Forms.style.border = "";
    Buttons.style.border = "";
    closee.style.border = "";
}
const modalshow = () => {
    navbarC.style.display = 'none';
    offcanvasC.style.display = 'none';
    modalsC.style.display = 'block';
    modals.style.border = "3px solid black";
    utilitiesC.style.display = 'none';
    cardC.style.display = 'none';
    FormsC.style.display = 'none';
    ButtonsC.style.display = 'none';
    closeC.style.display = 'none';

    offcanvas.style.border = "";
    navbar.style.border = "";
    gridsystem.style.border = "";
    utilities.style.border = "";
    card.style.border = "";
    Forms.style.border = "";
    Buttons.style.border = "";
    closee.style.border = "";
}
const gridshow = () => {
    navbarC.style.display = 'none';
    offcanvasC.style.display = 'none';
    modalsC.style.display = 'none';
    gridSystemD.style.display = 'block'
    gridsystem.style.border = "3px solid black";
    utilitiesC.style.display = 'none';
    cardC.style.display = 'none';
    FormsC.style.display = 'none';
    ButtonsC.style.display = 'none';
    closeC.style.display = 'none';

    offcanvas.style.border = "";
    modals.style.border = "";
    navbar.style.border = "";
    utilities.style.border = "";
    card.style.border = "";
    Forms.style.border = "";
    Buttons.style.border = "";
    closee.style.border = "";
}
const utilityshow = () => {
    navbarC.style.display = 'none';
    offcanvasC.style.display = 'none';
    modalsC.style.display = 'none';
    gridSystemD.style.display = 'none'
    utilitiesC.style.display = 'block';
    utilities.style.border = "3px solid black";
    cardC.style.display = 'none';
    FormsC.style.display = 'none';
    ButtonsC.style.display = 'none';
    closeC.style.display = 'none';

    offcanvas.style.border = "";
    modals.style.border = "";
    gridsystem.style.border = "";
    navbar.style.border = "";
    card.style.border = "";
    Forms.style.border = "";
    Buttons.style.border = "";
    closee.style.border = "";
}
const cardshow = () => {
    navbarC.style.display = 'none';
    offcanvasC.style.display = 'none';
    modalsC.style.display = 'none';
    gridSystemD.style.display = 'none'
    utilitiesC.style.display = 'none';
    cardC.style.display = 'block';
    card.style.border = "3px solid black";
    FormsC.style.display = 'none';
    ButtonsC.style.display = 'none';
    closeC.style.display = 'none';

    offcanvas.style.border = "";
    modals.style.border = "";
    gridsystem.style.border = "";
    utilities.style.border = "";
    navbar.style.border = "";
    Forms.style.border = "";
    Buttons.style.border = "";
    closee.style.border = "";
}
const formshow = () => {
    navbarC.style.display = 'none';
    offcanvasC.style.display = 'none';
    modalsC.style.display = 'none';
    gridSystemD.style.display = 'none'
    utilitiesC.style.display = 'none';
    cardC.style.display = 'none';
    FormsC.style.display = 'block';
    Forms.style.border = "3px solid black";
    ButtonsC.style.display = 'none';
    closeC.style.display = 'none';

    offcanvas.style.border = "";
    modals.style.border = "";
    gridsystem.style.border = "";
    utilities.style.border = "";
    card.style.border = "";
    navbar.style.border = "";
    Buttons.style.border = "";
    closee.style.border = "";
}
const buttonshow = () => {
    navbarC.style.display = 'none';
    offcanvasC.style.display = 'none';
    modalsC.style.display = 'none';
    gridSystemD.style.display = 'none'
    utilitiesC.style.display = 'none';
    cardC.style.display = 'none';
    FormsC.style.display = 'none';
    ButtonsC.style.display = 'block';
    Buttons.style.border = "3px solid black";
    closeC.style.display = 'none';

    offcanvas.style.border = "";
    modals.style.border = "";
    gridsystem.style.border = "";
    utilities.style.border = "";
    card.style.border = "";
    Forms.style.border = "";
    navbar.style.border = "";
    closee.style.border = "";
}
const closeeshow = () => {
    navbarC.style.display = 'none';
    offcanvasC.style.display = 'none';
    modalsC.style.display = 'none';
    gridSystemD.style.display = 'none'
    utilitiesC.style.display = 'none';
    cardC.style.display = 'none';
    FormsC.style.display = 'none';
    ButtonsC.style.display = 'none';
    closeC.style.display = 'block';
    closee.style.border = "3px solid black";

    offcanvas.style.border = "";
    modals.style.border = "";
    gridsystem.style.border = "";
    utilities.style.border = "";
    card.style.border = "";
    Forms.style.border = "";
    Buttons.style.border = "";
    navbar.style.border = "";
}

const marginShow = () => {
    marginC.style.display = 'block';
    fontC.style.display = 'none';
    borderC.style.display = 'none';
    positionC.style.display = 'none';
    animationC.style.display = 'none';
    heightC.style.display = 'none';

    margin.style.border = "3px solid black";
    font.style.border = '';
    border.style.border = '';
    position.style.border = '';
    animation.style.border = '';
    height.style.border = '';
}
const fontShow = () => {
    marginC.style.display = 'none';
    fontC.style.display = 'block';
    borderC.style.display = 'none';
    positionC.style.display = 'none';
    animationC.style.display = 'none';
    heightC.style.display = 'none';
    
    margin.style.border = "";
    font.style.border = '3px solid black';
    border.style.border = '';
    position.style.border = '';
    animation.style.border = '';
    height.style.border = '';
}
const borderShow = () => {
    marginC.style.display = 'none';
    fontC.style.display = 'none';
    borderC.style.display = 'block';
    positionC.style.display = 'none';
    animationC.style.display = 'none';
    heightC.style.display = 'none';

    
    margin.style.border = "";
    font.style.border = '';
    border.style.border = '3px solid black';
    position.style.border = '';
    animation.style.border = '';
    height.style.border = '';
}
const positionShow = () => {
    marginC.style.display = 'none';
    fontC.style.display = 'none';
    borderC.style.display = 'none';
    positionC.style.display = 'block';
    animationC.style.display = 'none';
    heightC.style.display = 'none';

    
    margin.style.border = "";
    font.style.border = '';
    border.style.border = '';
    position.style.border = '3px solid black';
    animation.style.border = '';
    height.style.border = '';
}
const animationShow = () => {
    marginC.style.display = 'none';
    fontC.style.display = 'none';
    borderC.style.display = 'none';
    positionC.style.display = 'none';
    animationC.style.display = 'block';
    heightC.style.display = 'none';

    
    margin.style.border = "";
    font.style.border = '';
    border.style.border = '';
    position.style.border = '';
    animation.style.border = '3px solid black';
    height.style.border = '';
}
const heightShow = () => {
    marginC.style.display = 'none';
    fontC.style.display = 'none';
    borderC.style.display = 'none';
    positionC.style.display = 'none';
    animationC.style.display = 'none';
    heightC.style.display = 'block';

    
    margin.style.border = "";
    font.style.border = '';
    border.style.border = '';
    position.style.border = '';
    animation.style.border = '';
    height.style.border = '3px solid black';
}


// Events 


navbar.addEventListener('click',navbarShow)
offcanvas.addEventListener('click',offcanshow)
modals.addEventListener('click',modalshow)
gridsystem.addEventListener('click',gridshow)
utilities.addEventListener('click',utilityshow)
card.addEventListener('click',cardshow)
Forms.addEventListener('click',formshow)
Buttons.addEventListener('click',buttonshow)
closee.addEventListener('click',closeeshow)

margin.addEventListener('click',marginShow)
font.addEventListener('click',fontShow)
border.addEventListener('click',borderShow)
position.addEventListener('click',positionShow)
animation.addEventListener('click',animationShow)
height.addEventListener('click',heightShow)