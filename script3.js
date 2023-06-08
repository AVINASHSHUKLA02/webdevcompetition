var tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#main",
      start: "top top",
      pin: true,
      scroller:`#page1`
    }
  })
  
  tl.from("#web1", {
    duration: 3,
    x: -3000,
    scrollTrigger: {
      scrub: 10,
      duration:10,
      trigger: `#page1`,
      start: `top top`,
      end: `0.1% top`,
      scroller: `#main`,
    },
    y:500,
    
    ease: "power1",
  }, "hey")
  tl.from("#main", {
    duration: 3,
    x: 800,
    ease: "power1",
  }, "hey")
  tl.from("#ro",{
scrollTrigger: {
  scrub: 10,
  duration:3,
  trigger: `#ro`,
  start: `top 150%`,
  end: `-5% top`,
  scroller: `#main`,
},
scale:3
    
  })

  var circle = document.querySelector("#circle");
window.addEventListener("mousemove",function(dets){
    gsap.to(circle,{
        x:dets.clientX,
        y:dets.clientY,
        duration:.2,
        ease:Expo
    }) 

})
