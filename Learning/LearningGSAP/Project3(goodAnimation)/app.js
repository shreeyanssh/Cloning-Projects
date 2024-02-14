gsap.to(".page2 img",{
    width:"100%", //have to write in "" when using special char like %
    scrollTrigger:{
        trigger:".page2",
        scroller:"body",
        markers:true,
        start:"top 0",
        end:"top -100%",
        scrub:true, 
        pin:true  //Pins the trigger till the animation is completed
    }
})