let sequence1 = gsap.timeline();

sequence1.to(".box1",{
    x:1000,
    rotate:360,
    duration:2,
    scale:0.5,
    backgroundColor: "blue",
    delay:1
})

sequence1.to(".box2",{
    x:1000,
    rotate:360,
    duration:2,
    scale:0.5,
    backgroundColor: "blue",
})

sequence1.to(".box3",{
    x:1000,
    rotate:360,
    duration:2,
    scale:0.5,
    backgroundColor: "blue",
})



     