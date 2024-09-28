gsap.registerPlugin(ScrollTrigger);
function timeline1()
{
    tl.from("nav h1,nav h4, nav button", {
        y: -50,
        opacity: 0,
        duration: 0.5,
        delay: 0.1,
        stagger: 0.1
    })
    
    tl.from(".center1 h1, .center1 p",{
        x: -100,
        opacity: 0,
        duration: 0.4,
        stagger: 0.2
    })

    tl.from(".center1 button",{
        opacity: 0,
        duration: 0.4
    })
    
    tl.from(".center2",{
        opacity: 0, 
        duration: 0.8
    },"-=1")
    
    
    tl.from(".section1last img",{
        opacity: 0,
        y: 10,
        duration: 0.2,
        stagger: 0.1
    })
}
var tl = gsap.timeline();
var t2 = gsap.timeline();
timeline1()

var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".section2",
        scroller: "body", // Ensure 'body' is correct for your scroller context
        start: "top 90%",
        scrub: 2,              // Smooth scroll-based animation, 2 seconds of smoothing
        end: "+=1000",  
        markers: true
      }
})


tl2.from(".element.line1",{
    x: -100,
    opacity: 0,
    duration: 1
}, "anim")


tl2.from(".element.line2",{
    x: 100,
    opacity: 0,
    duration: 1
}, "anim")


tl2.from(".element.line3",{
    x: -100,
    opacity: 0,
    duration: 1,
}, "anim+=1")


tl2.from(".element.line4",{
    x: 100,
    opacity: 0,
    duration: 1,
}, "anim+=1")


