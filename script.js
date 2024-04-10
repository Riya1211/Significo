function loaderAnimation(){
    var tl = gsap.timeline()
    // To disable scroll
    gsap.set("body, html", {overflow: "hidden", height: "100vh"});
    tl.to(".loader_circle", {
        duration: 7,
        rotation: 360,
        transformOrigin: "50% 50%",
        // repeat: 1, // Repeat infinitely
        ease: "linear"
    }, 'a');
    tl.to('.loader', {
        opacity: 0,
        duration: 0.2,
        delay:0.4,
        onComplete: function(){
            document.querySelector(".loader").setAttribute("style", "display: none; z-index: 0;");
            // To enable scroll
            gsap.set("body, html", {overflow: "", height: ""});
        }
    }, 'b')
}
function navAnimation(){
    const nav = document.querySelector(".nav");
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if(currentScroll <= 0){
            nav.classList.remove("scroll-up");
        }

        if(currentScroll > lastScroll && !nav.classList.contains("scroll-down")){
            nav.classList.remove("scroll-up")
            nav.classList.add("scroll-down")
        }

        if(currentScroll < lastScroll && nav.classList.contains("scroll-down")){
            nav.classList.remove("scroll-down")
            nav.classList.add("scroll-up")
        }
        lastScroll = currentScroll
    })
}
function homePageAnimation(){
    var clutter ="";
    document.querySelector(".homeHeading").textContent.split("").forEach(function(e){
        if(e === " ") clutter += `<sapn>&nbsp;</span`
        clutter += `<span>${e}</span>`
    })
    document.querySelector(".homeHeading").innerHTML = clutter

    gsap.set(".slidesm", {scale: 7})
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".home",
            start: "top top",
            end: "bottom bottom",
            // markers: true,
            // pin: true,
            // remove pin because it is causing issue with later animation so we add in the home an extra div with stick
            scrub: 1
        }
    })
    tl
    .to(".vdodiv", {
        '--clip': "0%",
        ease: Power2,
    }, 'a')
    .to(".slidesm", {
        scale: 1.2,
        ease: Power2,
    }, 'a')
    // animation
    gsap.set(".homeHeading span", {opacity: 0.1})
    tl.to(".homeHeading span", {
        opacity: 1,
        duration: 0.3,
        stagger: 0.01,
        ease: Power4
    }, 'a')
    .to(".lft", {
        xPercent: -10,
        stagger: .03,
        ease: Power4,
    }, 'b')
    .to(".rgt", {
        xPercent: 10,
        stagger: .03,
        ease: Power4,
    }, 'b')
}
function craftPageAnimation(){
    gsap.to(".card", {
        scrollTrigger:{
            trigger:".craft",    
            // start: "30% 70%",
            start: "16% bottom",
            end:"bottom bottom",
            // markers: true,
            scrub:1,
        },
        backgroundColor: "black",
        color: "#AEDEE0",
        // width: "65%",
        scale: 1.16,
        stagger: 0.2,
        ease: "power4.inOut"
    
    });
}
function realPageAnimation(){
    gsap.to(".slide", {
        scrollTrigger:{
            trigger:".cont",    
            start: "top top",
            end:"bottom bottom",
            // markers: true,
            pin:"#realSecBtn",
            scrub:1,
        },
        xPercent:-310,
        ease:Power4
    });
    
}
function teamAnimation(){
    document.querySelectorAll(".listelem").forEach(function(el){
        el.addEventListener("mousemove", function(dets){
            // This below code Picture will follow the mouse
            // gsap.utils.mapRange(0, window.innerWidth, -200, 200, dets.clientX)

            // for x - axis for an element follow issue
            // console.log(gsap.utils.mapRange(0, el.offsetHeight, -100, 100,  dets.clientY - this.getBoundingClientRect().top));
            // this below line is for show of image
            gsap.to(this.querySelector(".picture"), {
                opacity:1, 
                x:gsap.utils.mapRange(0, window.innerWidth, -200, 200, dets.clientX),
                ease: Power4, 
                duration: 0.5
            })
        })
    
        el.addEventListener("mouseleave", function(dets){
            gsap.to(this.querySelector(".picture"), {opacity:0, ease: Power4, duration: 0.5})
        })
    })
}
function paraAnimation(){
    var clutter ="";
    document.querySelector(".info1").textContent.split("").forEach(function(e){
        if(e === " ") clutter += `<sapn>&nbsp;</span`
        clutter += `<span>${e}</span>`
    })
    document.querySelector(".info1").innerHTML = clutter

    // animation
    gsap.set(".info1 span", {opacity: .1})
    gsap.to(".info1 span", {
        scrollTrigger:{
            trigger: ".info",
            start: "top 60%",
            end: "bottom 90%",
            scrub: 1,
        },
        opacity:1,
        stagger: 0.03,
        ease: Power4
    })
}
function loco(){
    (function () {
        const locomotiveScroll = new LocomotiveScroll();
    })();
}
function capsulesAnimation(){
    gsap.to(".capsule:nth-child(2)", {
        scrollTrigger: {
            trigger: ".capsules",
            start: "top 70%",
            end: "bottom bottom",
            // markers: true,
            scrub: 1
        },
        y:0,
        ease: Power4
    })
}
function themeChange(){
    document.querySelectorAll(".section").forEach(function(e){
        ScrollTrigger.create({
            trigger: e,
            start: "top 50%",
            end: "bottom 50%",
            // markers: true,
            onEnter: function(){
               const newTheme = e.dataset.color;
               document.body.setAttribute("theme", newTheme);
            //    document.body.setAttribute("theme", e.dataset.color);
               changeFavicon(newTheme);
            },
            onEnterBack: function(){
                // document.body.setAttribute("theme", e.dataset.color);
                const newTheme = e.dataset.color;
                document.body.setAttribute("theme", newTheme);
                changeFavicon(newTheme);
            }
        })
    })
    function changeFavicon(theme) {
        const link = document.querySelector('link[rel="shortcut icon"]');
        if (theme === 'black') {
            link.href = './favicon/black.png';
        } else if (theme === 'cyan') {
            link.href = './favicon/cyan.png';
        } else if (theme === 'salmon') {
            link.href = './favicon/salmon.png';
        } else if (theme === 'white') {
            link.href = './favicon/white.png';
        } else{
            link.href = './favicon/black.png';
        }
    }
}
function rotateAnimation(){
    gsap.to(".rotateImg", {
        rotation: 360, // Rotate 360 degrees
        duration: 25, // Duration of the animation in seconds
        repeat: -1, // Repeat infinitely
        ease: "linear" // Linear easing for continuous rotation
    });

}
function footerLogoAnimation(){
    // Animation for each character in brandName
    var clutter ="";
    document.querySelector(".brandName").textContent.split("").forEach(function(e){
        if(e === " ") clutter += `<sapn>&nbsp;</span`
        clutter += `<span>${e}</span>`
    })
    document.querySelector(".brandName").innerHTML = clutter

    // animation
    gsap.set(".brandName span", {opacity: 0})

    const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".footContainer",
          start: "60% bottom",
          end: "64% 68%", 
        //   markers: true,
          scrub: 1,
        },
    });
    
      // Animation for expanding row2
      tl.to(".row2", { height: "46%", ease: Power4, duration: 1 }, "a");


       tl.to(".brandName span", { opacity: 1, y: 50, ease: "power4", stagger: 0.1 }, "-=0.5", "a");
}
function waveTextAnimation(){
    document.querySelectorAll(".textMove").forEach(function(el){
        var index = 0;
        var animating = false;
        el.addEventListener("mouseenter", function() {
            var text = el.querySelectorAll(".waveText");
           
            if(!animating){
                animating = true;
                gsap.to(text[index], {
                    top: "-=100%",
                    ease: Power4,
                    duration: 0.5,
                    onComplete: function(){
                        gsap.set(this._targets[0], {top: "100%"});
                        animating = false;
                    }
                })
                index === text.length-1 ? (index = 0) : index++;
            
                gsap.to(text[index], {
                    top: "-=100%",
                    ease: Power4,
                    duration: 0.5
                })
            }
        })
    })
}
function waveTextBtnAnimation(){
    document.querySelectorAll(".btn").forEach(function(el){
        var index = 0;
        var animating = false;
        el.addEventListener("mouseenter", function() {
            var text = el.querySelectorAll(".waveTextBtn");
            var icon = el.querySelector(".aIcon");
           
            if(!animating){
                animating = true;
                gsap.to(text[index], {
                    top: "-=100%",
                    ease: Power4,
                    duration: 0.5,
                    onComplete: function(){
                        gsap.set(this._targets[0], {top: "100%"});
                        animating = false;
                    }
                })
                index === text.length-1 ? (index = 0) : index++;
            
                gsap.to(text[index], {
                    top: "-=100%",
                    ease: Power4,
                    duration: 0.5
                })

                gsap.to(icon, {
                    rotation: 50, // Rotate 360 degrees
                    duration: 0.5, // Duration of the animation in seconds
                    ease: Power4
                })
            }
        })
        el.addEventListener("mouseleave", function() {
            var icon = el.querySelector(".aIcon");
           

                gsap.to(icon, {
                    rotation: 0, // Rotate 360 degrees
                    duration: 0.5, // Duration of the animation in seconds
                    ease: Power4,
                })

        })
    })
}

loaderAnimation();
navAnimation();
homePageAnimation();
realPageAnimation();
teamAnimation();
paraAnimation();
loco();
capsulesAnimation();
themeChange();
rotateAnimation();
footerLogoAnimation();
waveTextAnimation();
waveTextBtnAnimation();
craftPageAnimation();