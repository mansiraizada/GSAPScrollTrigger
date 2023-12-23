gsap.from('#page1 #center', {
    scale: 0,
    delay: 0.8,
    duration: 1.5,
    rotate: 360
})

gsap.from('#page2 #center', {
    scale: 0,
    rotate: 360,
    duration: 0.8,
    scrollTrigger: {
        trigger: '#page2 #center',
        scroller: 'body',
        // markers: true,
        start: 'top 90%',
        end: 'top 45%',
        scrub: true
    }
})

gsap.to("#page3 img", {
    width: "100%",
    duration: 5,
    scrollTrigger: {
        trigger: "#page3",
        scroller: "body",
        // markers: true,
        scrub: true,
        pin: true,
        start: "top 0",
        end: "top -100%"
    }
})

gsap.to("#page4 h1", {
    transform: "translateX(-110%)",
    delay: 0.8,
    // duration: 5,
    scrollTrigger: {
        trigger: "#page4",
        scroller: "body",
        scrub: 2,
        pin: true,
        start: "top 0",
        end: "top -140%"
    }
})
