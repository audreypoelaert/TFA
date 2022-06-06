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
    end: 'bottom top',
    scrub: 0.5,
    markers: true,
    onEnter: () => videoElem.load(),
    onEnterBack: () => videoElem.load(),
    onLeave: () => videoElem.pause(),
    onLeaveBack: () => videoElem.pause(),
  });
  
});

/*button et mockups*/

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

gsap.to(".mockup1", {
  x: -800,
  duration: 2,
  scrollTrigger: {
    trigger: ".mockup1",
    start:'center center',
    end:'bottom top',
    scrub: 0.5,
  },
});

gsap.to(".mockup2", {
  x: 800,
  duration: 2,
  scrollTrigger: {
    trigger: ".mockup2",
    start:'center center',
    end:'bottom top',
    scrub: 0.5,
  },
});

gsap.to(".mockup3", {
  x: -800,
  duration: 2,
  scrollTrigger: {
    trigger: ".mockup3",
    start:'center center',
    end:'bottom top',
    scrub: 0.5,
  },
}, "+=2");

/*case-study*/

/*logo*/
const log = gsap.timeline({defaults: {duration: 2}});
log.from(".logo2", {
  x: 600,
  scrollTrigger : {
    trigger: ".logo2",
    start:'center center',
    end:'bottom top',
    scrub: 0.5,
  },
});
log.from(".logo1", {
  x: -600,
  scrollTrigger : {
    trigger: ".logo1",
    start:'center center',
    end:'bottom top',
    scrub: 0.5,
  },
});
log.from(".logo3", {
  x: -600,
  scrollTrigger : {
    trigger: ".logo3",
    start:'center center',
    end:'bottom top',
    scrub: 0.5,
  },
});
log.from(".logo4", {
  x: 600,
  scrollTrigger : {
    trigger: ".logo4",
    start:'center center',
    end:'bottom top',
    scrub: 0.5,
  },
});
log.from(".logo5", {
  x: -600,
  scrollTrigger : {
    trigger: ".logo5",
    start:'center center',
    end:'bottom top',
    scrub: 0.5,
  },
});

/*moodboard*/
const mood = gsap.timeline({defaults: {duration: 2}});
mood.from(".mlogo", {
  x: -100,
  scrollTrigger : {
    trigger: ".mlogo",
    start:'center center',
    end:'bottom top',
    scrub: 0.5,
  },
});

mood.from(".mvelo", {
  x: -100,
  scrollTrigger : {
    trigger: ".mvelo",
    start:'center center',
    end:'bottom top',
    scrub: 0.5,
  },
}, "+=2");
mood.from(".msport", {
  x: -100,
  scrollTrigger : {
    trigger: ".msport",
    start:'center center',
    end:'bottom top',
    scrub: 0.5,
  },
}, "+=2");

/*Slider*/

let index = 1;
slides(index);

element.addEventListener("click", function plusSlides(n) {
  slides(index += n);
});

function currentSlide(n) {
  slides(index = n);
}

function slides(n) {
  let i;
  let lapin = document.getElementsByClassName("slide");
  if (n > lapin.length) {index = 1}
  if (n < 1) {index = lapin.length}
  for (i = 0; i < lapin.length; i++) {
    lapin[i].style.display = "none";
  }
  lapin[index-1].style.display = "block";
}



