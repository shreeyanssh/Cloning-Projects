let tl = gsap.timeline();

tl.from(".nav-one h4",{
    y: -50,
    opacity: 0,
    duration:.5,
    stagger:0.3
})

tl.from(".hero h1",{
    x: -500,
    opacity: 0,
    duration:1,
    stagger:0.3
})

tl.from(".hero img",{
    x: 100,
    rotate:60,
    opacity: 0,
    duration:1,
    stagger:1
})

