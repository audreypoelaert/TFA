"use strict"

/*animation landing-page*/
/*video*/
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

let videoDivs = gsap.utils.toArray('.vid');

videoDivs.forEach((videoDiv, i) => {
  
  let videoElem = videoDiv.querySelector('video')
  
  ScrollTrigger.create({
    trigger: videoElem,
    start: 'top bottom',
    end: 'bottom bottom',
    onEnter: () => videoElem.load(),
    onEnterBack: () => videoElem.load(),
    onLeave: () => videoElem.pause(),
    onLeaveBack: () => videoElem.pause(),
    markers: true,
  });
  
});

let videoDivs02 = gsap.utils.toArray('.vid02');

videoDivs02.forEach((videoDiv02, i) => {
  
  let videoElem02 = videoDiv02.querySelector('video')
  
  ScrollTrigger.create({
    trigger: videoElem02,
    start: 'top bottom',
    end: 'bottom bottom',
    onEnter: () => videoElem02.load(),
    onEnterBack: () => videoElem02.load(),
    onLeave: () => videoElem02.pause(),
    onLeaveBack: () => videoElem02.pause(),
    markers: true,
  });
  
});



/*button et mockups*/
var verif = document.querySelector(".button__el");
if (verif){
  gsap.from(".button__el", { 
    scale:1.5,
    duration: 2,
    scrollTrigger: {
      trigger: ".button__el",
      start:'top bottom',
      end:'bottom top',
      scrub: 0.5,
    },
  });
}

var mock1 = document.querySelector(".mockup1");
if (mock1){
    gsap.from(".mockup1", {
    x: -600,
    duration: 1,
    scrollTrigger: {
      trigger: ".mockup1",
      start:'top top',
      end:'bottom top',
      scrub: 0.5,
    },
  });
}

var mock2 = document.querySelector(".mockup2");
if (mock2){
  gsap.from(".mockup2", {
    x: 600,
    duration: 1,
    scrollTrigger: {
      trigger: ".mockup2",
      start:'top top',
      end:'bottom top',
      scrub: 0.5,
    },
  });
}


var mock3 = document.querySelector(".mockup3");
if (mock3){
  gsap.from(".mockup3", {
    x: -600,
    duration: 1,
    scrollTrigger: {
      trigger: ".mockup3",
      start:'top top',
      end:'bottom top',
      scrub: 0.5,
    },
  }, "+=1");
}


/*case-study*/

/*logo*/

const log = gsap.timeline({defaults: {duration: 1}});

var logo2 = document.querySelector(".logo2");
if (logo2){
  log.from(".logo2", {
    x: 600,
    scrollTrigger : {
      trigger: ".logo2",
      start:'center center',
      end:'bottom top',
      scrub: 0.5,
    },
  });
}

var logo1 = document.querySelector(".logo1");
if (logo1){
  log.from(".logo1", {
    x: -600,
    scrollTrigger : {
      trigger: ".logo1",
      start:'center center',
      end:'bottom top',
      scrub: 0.5,
    },
  });
}


var logo3 = document.querySelector(".logo3");
if (logo3){
  log.from(".logo3", {
    x: -600,
    scrollTrigger : {
      trigger: ".logo3",
      start:'center center',
      end:'bottom top',
      scrub: 0.5,
    },
  });
}


var logo4 = document.querySelector(".logo4");
if (logo4){
  log.from(".logo4", {
    x: 600,
    scrollTrigger : {
      trigger: ".logo4",
      start:'center center',
      end:'bottom top',
      scrub: 0.5,
    },
  });
  
}

var logo5 = document.querySelector(".logo5");
if (logo5){
  log.from(".logo5", {
    x: -600,
    scrollTrigger : {
      trigger: ".logo5",
      start:'center center',
      end:'bottom top',
      scrub: 0.5,
    },
  });
}


/*moodboard*/
const mood = gsap.timeline({defaults: {duration: 2}});

var mlogo = document.querySelector(".mlogo");
if (mlogo){
  mood.from(".mlogo", {
    x: -100,
    scrollTrigger : {
      trigger: ".mlogo",
      start:'center center',
      end:'bottom top',
      scrub: 0.5,
    },
  });
}


var mvelo = document.querySelector(".mvelo");
if (mvelo){
  mood.from(".mvelo", {
    x: -100,
    scrollTrigger : {
      trigger: ".mvelo",
      start:'center center',
      end:'bottom top',
      scrub: 0.5,
    },
  }, "+=2");
}


var msport = document.querySelector(".msport");
if (msport){
  mood.from(".msport", {
    x: -100,
    scrollTrigger : {
      trigger: ".msport",
      start:'center center',
      end:'bottom top',
      scrub: 0.5,
    },
  }, "+=2");
}


/*Slider*/

var index = 1;
showSlides(index);

let preceBtn = document.querySelector(".precedent");
if(preceBtn){
  preceBtn.addEventListener('click', () => {
        plusSlides(-1);
    });
}

let suivBtn = document.querySelector(".suivant");
if(suivBtn){
    suivBtn.addEventListener('click', () => {
        plusSlides(1);
    });
}

function plusSlides(n) {
    showSlides(index += n);
}


function currentSlide(n) {
    showSlides(index = n);
}

function showSlides(n) {
  var slider = document.querySelector(".slide");
  if (slider){
    var i;
    var slides = document.querySelectorAll(".slide");
    if (n > slides.length) {
        index = 1;
    } 

    if (n < 1) {
        index = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].classList.add("hide");
    }

    slides[index-1].classList.remove("hide"); 
}
  }
   