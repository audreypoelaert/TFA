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
    onEnter: () => videoElem.play(),
    onEnterBack: () => videoElem.play(),
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
});
mood.from(".msport", {
  x: -100,
  scrollTrigger : {
    trigger: ".msport",
    start:'center center',
    end:'bottom top',
    scrub: 0.5,
  },
});

/*Slider*/

var slideIndex = 1;
slider(slideIndex);

function plusSlider(n) {
  slider(slideIndex += n);
}

function slider(n) {
  var i;
  var change = document.getElementsByClassName("slide");
  if (n > change.length) {slideIndex = 1}
  if (n < 1) {slideIndex = change.length};
  for (i = 0; i < change.length; i++) {
    change[i].style.display = "none";
  }
  change[slideIndex -1].style.display = "block";
}



