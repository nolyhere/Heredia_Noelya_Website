gsap.registerPlugin(ScrollTrigger);

gsap.from('.fav-items',{
    y: 400,
    duration: 2,
    opacity: 0,
    ease: "bounce.out",
    stagger: .15,
    scrollTrigger: {
        trigger:'.favorites',
        start: "top 80%",
    }
});
gsap.from('.elastic', {
    duration: 5,
    ease: "elastic.out(1,0.3)",
    y: -250,
    scrollTrigger: {
        trigger:'.header',
        start: "top 80%",
    }
    });