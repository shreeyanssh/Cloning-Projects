
gsap.to(".page2 h1",{
    transform:"translateX(-200%)",
    scrollTrigger:{
        trigger:".page2",
        scroller:"body",
        markers:true,
        pin:true,
        scrub:2,
        start: "top 0",
        end:"top -100%",
    }
})
