
//responsive js

const nav = document.querySelector('.nav-links');
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelectorAll('.nav-links li');
    
    //Toggle Nav
    burger.addEventListener('click', ()=>{
      nav.classList.toggle('nav-active');
      
      //Animate Links
      navLinks.forEach((link, index)=>{
        if(link.style.animation){
          link.style.animation = ''
        }else{
              link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
  
        }
      });
      
      //burger animation
      burger.classList.toggle('toggle');
      
      
    });
    
  }

  navSlide();
  


let connectingDiv=document.querySelector('.connectingDiv');
let NavBarDiv=document.querySelector('.NavBarDiv');
const mediaQuery = window.matchMedia('(max-width: 768px)');
const mediaQueryIPad=window.matchMedia('(min-height:1366px)')

window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    if(scroll>300){

      anime({
        targets:NavBarDiv,
        opacity:1,
        backgroundColor:'rgb(0,0,0)'
       })
        
    }
    if(scroll<850){
      anime({
        targets:'.logo h4',
        color:'rgb(255,255,255)'
      })
      anime({
        targets:'.burger div',
        backgroundColor:'rgb(255,255,255)'
      })
      anime({
        targets:'.nav-links',
        backgroundColor:'rgb(0,0,0)'
      })
      anime({
        targets:'.nav-links a',
        color:'rgb(255,255,255)'
      })
      anime({
        targets:'.fab',
        color:'rgb(255,255,255)'
      })
      
    }
     if(scroll<300){
      anime({
        targets:NavBarDiv,
        opacity:0
         })
    }
     if(scroll>850){
      
      anime({
        targets:NavBarDiv,
        backgroundColor:'rgb(255,255,255)',
        opacity:1
      })
      anime({
        targets:'.logo h4',
        color:'rgb(255,0,0)'
      })
      anime({
        targets:'.burger div',
        backgroundColor:'rgb(255,0,0)'
      })
      anime({
        targets:'.nav-links',
        backgroundColor:'rgb(255,255,255)'
      })
      anime({
        targets:'.nav-links a',
        color:'rgb(255,0,0)'
      })
      anime({
        targets:'.fab',
        color:'rgb(255,0,0)'
      })
    }
    //media query 768px
    if(mediaQuery.matches){
      
     if(scroll>630){
      
      anime({
        targets:NavBarDiv,
        backgroundColor:'rgb(255,255,255)',
        opacity:1
      })
      anime({
        targets:'.logo h4',
        color:'rgb(255,0,0)'
      })
      anime({
        targets:'.burger div',
        backgroundColor:'rgb(255,0,0)'
      })
      anime({
        targets:'.nav-links',
        backgroundColor:'rgb(255,255,255)'
      })
      anime({
        targets:'.nav-links a',
        color:'rgb(255,0,0)'
      })
      anime({
        targets:'.fab',
        color:'rgb(255,0,0)'
      })
    }
    if(scroll<630){
      anime({
        targets:'.logo h4',
        color:'rgb(255,255,255)'
      })
      anime({
        targets:'.burger div',
        backgroundColor:'rgb(255,255,255)'
      })
      anime({
        targets:'.nav-links',
        backgroundColor:'rgb(0,0,0)'
      })
      anime({
        targets:'.nav-links a',
        color:'rgb(255,255,255)'
      })
      anime({
        targets:'.fab',
        color:'rgb(255,255,255)'
      })
      
    }
    //media query ipad pro
    if(mediaQueryIPad.matches){
      
      if(scroll>200){
       console.log(scroll);
       anime({
         targets:NavBarDiv,
         backgroundColor:'rgb(255,255,255)',
         opacity:1
       })
       anime({
         targets:'.logo h4',
         color:'rgb(255,0,0)'
       })
       anime({
         targets:'.burger div',
         backgroundColor:'rgb(255,0,0)'
       })
       anime({
         targets:'.nav-links',
         backgroundColor:'rgb(255,255,255)'
       })
       anime({
         targets:'.nav-links a',
         color:'rgb(255,0,0)'
       })
       anime({
         targets:'.fab',
         color:'rgb(255,0,0)'
       })
     }
     if(scroll<300){
       anime({
         targets:'.logo h4',
         color:'rgb(255,255,255)'
       })
       anime({
         targets:'.burger div',
         backgroundColor:'rgb(255,255,255)'
       })
       anime({
         targets:'.nav-links',
         backgroundColor:'rgb(0,0,0)'
       })
       anime({
         targets:'.nav-links a',
         color:'rgb(255,255,255)'
       })
       anime({
         targets:'.fab',
         color:'rgb(255,255,255)'
       })
       
     }
    }
  }
});