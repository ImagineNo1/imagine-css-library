let activeComponent = 'none' ;
let activeComponentType ;

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
            activeComponentType = 'offcanvas' ;
         },100)

    }else if(display == 'block'){
        target.style.display = "none";
        document.body.classList.toggle('stop-scrolling')
        activeComponent = 'none';
        activeComponentType = 'none' ;
    }
}

const ModalDisplay = (target) => {
    const display = getComputedStyle(target).display;
    if (display == 'none'){
         target.style.display = "block";
         
        //  document.body.style.opacity = '0.3';
        //  target.classList.toggle('opacity-full');

         setTimeout (() => {
            activeComponent = target ;
            activeComponentType = 'modal' ;

         },100)
    }else if(display == 'block'){
        target.style.display = "none";
        document.body.style.opacity = '1';
        activeComponent = 'none';
        activeComponentType = 'none' ;


    }
}
    window.addEventListener('click', function(e){   
        if (activeComponent !== 'none'){
            if (!activeComponent.contains(e.target) || closeModal.contains(e.target) || closeOffcanvas.contains(e.target) ){

                if (activeComponentType == 'offcanvas') {
                     document.body.classList.toggle('stop-scrolling')
                }else if (activeComponentType == 'modal') {
                     document.body.style.opacity = '1';
                }

                activeComponent.style.display = "none";
                activeComponent = 'none';
                activeComponentType = 'none';
            }
        }
      });

  