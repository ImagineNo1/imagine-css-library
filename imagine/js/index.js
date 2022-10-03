let activeComponent = 'none' ;
const closeOffcanvas = document.querySelector('.closeOffcanvas')
const closeModal = document.querySelector('.closeModal')

const toggleNavLinks = ()=> {
            
    const navLinks = document.querySelector('.nav-links')
    navLinks.classList.toggle("active");
}

const offcanvasDisplay = (target) => {
    const display = getComputedStyle(target).display;
    if (display == 'none'){
         target.style.display = "block";
        document.body.classList.toggle('stop-scrolling')
        setTimeout (() => {
            activeComponent = target ;
         },100)

    }else if(display == 'block'){
        target.style.display = "none";
        document.body.classList.toggle('stop-scrolling')
        activeComponent = 'none';
    }
}

const ModalDisplay = (target) => {
    const display = getComputedStyle(target).display;
    if (display == 'none'){
         target.style.display = "block";
        //  document.body.style.opacity = '0.5';
        //  target.style.opacity = '1';
         setTimeout (() => {
            activeComponent = target ;
         },100)
    }else if(display == 'block'){
        target.style.display = "none";
        document.body.style.opacity = '1';
        activeComponent = 'none';


    }
}
    window.addEventListener('click', function(e){   
        if (activeComponent !== 'none'){
            if (!activeComponent.contains(e.target) || closeModal.contains(e.target) || closeOffcanvas.contains(e.target) ){
                activeComponent.style.display = "none";
                activeComponent = 'none';
            }
        }
      });
