gsap.from(".box1 .circle",{
    scale: 0,
    delay:0.3,
    duration:2,
    rotate:1440
})

// gsap.from(".box2 .circle",{
//     scale: 0,
//     delay:0.3,                       //Simple scrollTrigger
//     duration:2,
//     rotate:720,
//     scrollTrigger:".box2 .circle"
// })


gsap.from(".box2 .circle",{
    scale: 0,
    delay:0.3,
    duration:2,
    rotate:720,
    scrollTrigger:{
        trigger:".box2 .circle",  //the element you are triggering
        scroller:"body",   //you are scrolling the body
        markers:"true",  //Used to see where you scroll trigger start and end.
        start:"top 80%", //used to shift the start of a scroll trigger.
        end:"top 30%", //Used to shift the end point
        scrub:"true"  // the animation play back and for between the start and end points
    }
})
