// requires GSAP 3.10.0 or later

gsap.set(".ball", {xPercent: -50, yPercent: -50});

let xTo = gsap.quickTo(".ball", "x", {duration: 0.6, ease: "power3"}),
    yTo = gsap.quickTo(".ball", "y", {duration: 0.6, ease: "power3"});

window.addEventListener("mousemove", e => {
  // xTo(e.pageX);
  // yTo(e.pageY);
  xTo(e.clientX);
  yTo(e.clientY);
});

// older quickSetter version: https://codepen.io/GreenSock/pen/WNNNBpo




/*------------------------------
Register plugins
------------------------------*/
gsap.registerPlugin(ScrollTrigger, ScrollSmoother)


/*------------------------------
Init ScrollSmoother
------------------------------*/
const scrollerSmoother = ScrollSmoother.create({
  content: '#content',
  wrapper: '#wrapper',
  smooth: true,
  effects: false,
  normalizeScroll: true
})

const tl = gsap.timeline({
  scrollTrigger: {
      trigger: '.accordions',
      pin: true,
      start: 'top top',
      end: 'bottom top',
      scrub: 1,
      ease: 'linear',
    }
})

tl.to('.accordion .text', {
  height: 0,
  paddingBottom: 0,
  opacity: 0,
  stagger: .5,
})
tl.to('.accordion', {
  marginBottom: -15,
  stagger: .5,
}, '<')
