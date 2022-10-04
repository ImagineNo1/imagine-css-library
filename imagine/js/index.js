let activeComponent = 'none' ;
let activeComponentType ;
let newActiveComponent ;

const closeOffcanvas = document.querySelector('.closeOffcanvas')
const closeModal = document.querySelector('.closeModal')
const close = document.querySelector('.close')


const toggleNavLinks = ()=> {
            
    const navLinks = document.querySelector('.nav-links')
    navLinks.classList.toggle("active");
}

const offcanvasDisplay = (target) => {
    const display = getComputedStyle(target).display;
    if(target.firstElementChild.classList.contains('offcanvas-content')){
        newActiveComponent = target.firstElementChild;
    }
    if (display == 'none'){
         target.style.display = "block";
        document.body.classList.toggle('stop-scrolling')
        setTimeout (() => {
            activeComponent = newActiveComponent ;
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
    if(target.firstElementChild.classList.contains('modal-content')){
        newActiveComponent = target.firstElementChild;
    }
    if (display == 'none'){
         target.style.display = "block";
        document.body.classList.toggle('stop-scrolling')
         setTimeout (() => {
            activeComponent = newActiveComponent ;
            activeComponentType = 'modal' ;

         },100)
    }else if(display == 'block'){
        target.style.display = "none";
        document.body.classList.toggle('stop-scrolling')
        document.body.style.opacity = '1';
        activeComponent = 'none';
        activeComponentType = 'none' ;


    }
}
    window.addEventListener('click', function(e){   
        if (activeComponent !== 'none'){
            if (!activeComponent.contains(e.target) || closeModal.contains(e.target) || closeOffcanvas.contains(e.target) || close.contains(e.target) ){

                if (activeComponentType == 'offcanvas') {
                    
                    activeComponent.parentNode.style.display = "none";
                    activeComponent = 'none';
                    activeComponentType = 'none';
                     document.body.classList.toggle('stop-scrolling')

                }else if (activeComponentType == 'modal') {

                    activeComponent.parentNode.style.display = "none";
                    activeComponent = 'none';
                    activeComponentType = 'none';
                    document.body.classList.toggle('stop-scrolling')
                }


            }
        }
      });

  