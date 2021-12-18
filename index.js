
let dots = document.querySelectorAll('.dots');
let connecting = document.querySelectorAll('.connecting');
let RoadDiv=document.querySelector('#Layer_1 path');
let buttonSvg=document.getElementById('svg_1');
let Marketing=document.querySelector('.marketing img');
let MarketingPtag=document.querySelector('.marketing p');
let design=document.querySelector('.design img');
let designPtag=document.querySelector('.design p');
let motion=document.querySelector('.motion img');
let motionPtag=document.querySelector('.motion p');
let ads=document.querySelector('.ads img');
let adsPtag=document.querySelector('.ads p');
let ButtonDiv=document.querySelector('.container');
let modalBody=document.getElementById('modalBody');
let images=document.querySelectorAll('img');
let AllPhotos=document.querySelectorAll('[data-bs-toggle=modal]');
let AllPhotosSlider=document.querySelector('.BannersOuterDiv');
let GetSrcOfImage;
let ModalClose= document.getElementById('exampleModal');
let previousBtn=document.querySelector('.carousel-control-prev');
/*ì

//responsive
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
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
*/
/*
//button submit
const bottom = document.querySelector(".bottom");
const overlay = document.querySelector(".overlay");
const count = 110;
const size = 50;
for (let i = 0; i <= count; i += 1) {
  const dot = document.createElement("div");
  dot.classList.add("dot");
  bottom.appendChild(dot);
}
const dotzz = Array.from(document.querySelectorAll(".dot"));

const updateText = (text) => {
  Array.from(document.querySelectorAll(".text")).forEach(
    (e) => (e.innerHTML = text)
  );
};

const reset = () => {
  dotzz.forEach((dot, i) => {
    const x = (i / count) * (190 + size) - size / 2;
    const y = Math.random(1) * 52 - size / 2;
    dot.style.width = `${size}px`;
    dot.style.height = `${size}px`;
    dot.style.left = `${x}px`;
    dot.style.top = `${y}px`;
    dot.style.opacity = 1;
    dot.style.transform = "scale(1)";
  });
};
reset();

overlay.addEventListener("click", () => {
  anime({
    easing: "linear",
    targets: document.querySelectorAll(".dot"),
    opacity: [{ value: 0, duration: 600, delay: anime.stagger(10) }],
    translateX: {
      value: function () {
        return anime.random(-30, 30);
      },
      duration: 400,
      delay: anime.stagger(10)
    },
    translateY: {
      value: function () {
        return anime.random(-30, 30);
      },
      duration: 400,
      delay: anime.stagger(10)
    },
    scale: {
      value: function () {
        return 0;
      },
      duration: 400,
      delay: anime.stagger(10)
    }
  });
  anime({
    easing: "linear",
    delay: 4000,
    complete: () => {
      updateText("Contact Me");
      setTimeout(() => {
        updateText("Contact Me");
        reset();
      }, 3000);
    }
  });
});
*/
//image sliding
/*
SrcOfImage=(e)=>{
  let ImageSrc=e.target.src;
modalBody.innerHTML=`<div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
<div class="carousel-inner">
  <div class="carousel-item active">
    <img src=${ImageSrc} class="d-block w-100" alt="...">
  </div>
  <div class="carousel-item">
    <img src="..." class="d-block w-100" alt="...">
  </div>
  <div class="carousel-item">
    <img src="..." class="d-block w-100" alt="...">
  </div>
</div>
<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
  <span class="visually-hidden">Previous</span>
</button>
<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
  <span class="carousel-control-next-icon" aria-hidden="true"></span>
  <span class="visually-hidden">Next</span>
</button>
</div>`

}

BannerInnerDiv.forEach(item=>{
  item.addEventListener('click',SrcOfImage);
})
*/
//button fade in

anime({
  targets:ButtonDiv,
  left: '10%',
  opacity:1,
  borderRadius: ['0%', '50%'],
  easing: 'easeInOutQuad',
  delay:8000
})
anime({
  targets:RoadDiv,
  strokeDashoffset:[anime.setDashoffset,0],
  easing:'easeInOutQuad',
  duration:3000,
  delay:2600,
  direction:'forwards',
  loop:false
})


 anime({
  targets:RoadDiv,
  opacity:0.6,
  fillOpacity:1,  
  easing:'easeOutBounce',
  duration: 1500,
  delay: 4700,
  direction:'forwards'
})
anime({
  targets:buttonSvg,
  strokeDashoffset:[anime.setDashoffset,0],
  easing:'easeInOutQuad',
  duration:1000,
  delay:9000,
  direction:'forwards',
})
anime({
  targets:'#svg_2',
  strokeDashoffset:[anime.setDashoffset,0],
  easing:'easeInOutQuad',
  duration:1000,
  delay:9000,
  direction:'forwards',
})

anime({
  targets:MarketingPtag,
  opacity:1, 
  duration: 2000,
  delay: 7700,
  translateX:'-20px',
  direction:'forwards'
})

anime({
  targets:Marketing,
  rotateX:[{
    value:'90deg',
    duration:10,
    delay:10,
  },
  {
    value:'-20deg',
    duration:1000,
    delay:7200,
  
  }],
 
  opacity:1,
  delay:7200,
  easing:'spring(1, 80, 10, 0)',
   direction:'forwards'
})
anime({
  targets:designPtag,
  opacity:1, 
  duration: 2000,
  delay: 5000,
  translateX:'-20px',
  direction:'forwards'
})

anime({
  targets:design,
  rotateX:[{
    value:'90deg',
    duration:10,
    delay:10,
  },
  {
    value:'-20deg',
    duration:1000,
    delay:4800,
  
  }],
 
  opacity:1,
  delay:4800,
  easing:'spring(1, 80, 10, 0)',
   direction:'forwards'

})
anime({
  targets:motionPtag,
  opacity:1, 
  duration: 2000,
  delay: 5700,
  translateX:'-20px',
  direction:'forwards'
})
anime({
  targets:motion,
  rotateX:[{
    value:'90deg',
    duration:10,
    delay:10,
  },
  {
    value:'-20deg',
    duration:1000,
    delay:5500,
  
  }],
 
  opacity:1,
  delay:5500,
  easing:'spring(1, 80, 10, 0)',
   direction:'forwards'
})
anime({
  targets:adsPtag,
  opacity:1, 
  duration: 2000,
  delay: 6700,
  translateX:'-20px',
  direction:'forwards'
})
anime({
  targets:ads,
  rotateX:[{
    value:'90deg',
    duration:10,
    delay:10,
  },
  {
    value:'-20deg',
    duration:1000,
    delay:6500,
  
  }],
 
  opacity:1,
  delay:6500,
  easing:'spring(1, 80, 10, 0)',
   direction:'forwards'
})

  anime({
    targets: connecting,
    translateY: 300,
    delay: anime.stagger(100, {start: 1000}) // delay starts at 500ms then increase by 100ms for each elements.
  });

  anime({
    targets: dots,
    translateX: function(el) {
      return el.getAttribute('data-X');
    },
    translateY: function(el, i) {
      return 50 + (-50 * i);
    },
    scale: function(el, i, l) {
      return (l - i) + .30;
    },
    rotate: function() { return anime.random(-360, 360); },
    borderRadius: function() { return ['50%', anime.random(10, 35) + '%']; },
    duration: function() { return anime.random(1200, 1800); },
    delay: function() { return anime.random(0, 3000); },
    direction: 'alternate',
    loop: false
  });
//previous image


  //modal Opening

  const OpenModal=(e)=>{
   let carousel=document.querySelector('.carousel');
    let CurrentImage=e.target.src;
    let img=document.createElement('img');
    let carouselDiv=document.querySelector('.carousel-inner');

    let imageDiv;
    //deep clone

    
let clone=AllPhotosSlider.cloneNode(true);
          
clone.childNodes.forEach((item,index)=>{
   item.childNodes.forEach((item1,index)=>{

   if(item1.src){
     imageDiv=document.createElement('div');
     imageDiv.setAttribute('class','carousel-item');
     imageDiv.append(item1);
     carouselDiv.appendChild(imageDiv);

   if(CurrentImage==item1.src){
     
     item1.parentElement.classList.add('active');
     setTimeout(()=>{item1.parentElement.classList.remove('active');},5000)
   }
   }
   
   
 })
})
 ModalClose.addEventListener('click',()=>{
   })
}
  
  
  AllPhotos.forEach(item=>{
    item.addEventListener('click',OpenModal)
  })

//video player
let VideoSrc=document.getElementById('videoSrc');
let videos=document.querySelectorAll('.video');

openplayer=(e)=>{
let videosrc=e.target.src;
VideoSrc.setAttribute('src',videosrc);
let video=document.getElementById('video');
video.style.display='block';

  video.load();
  video.play();

}
videos.forEach(video=>{
  video.addEventListener('click',openplayer);
})