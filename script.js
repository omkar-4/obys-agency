const loadingtimer = document.querySelector('#line1-part1 h5');
const loaderContainer = document.getElementById("loader-container");
const ring = document.getElementById('ring');

document.addEventListener('mousemove', (event) => {
  ring.style.left = event.clientX - ring.offsetWidth / 2 + 'px';
  ring.style.top = event.clientY - ring.offsetHeight / 2 + 'px';
});

let lp = 0; //loading progress

const tl = gsap.timeline();
gsap.from(".line h1",{
    y:100,
    stagger: 0.25,
    duration: 0.6,
    delay: 0.5
});

tl.from('#line1-part1',{
    opacity:0,
    duration:1,
    delay: 2,
    onStart: function(){
        const loadinginterval = setInterval(function(){
            if(lp<100){
                loadingtimer.innerHTML = lp++;
            }else{
                lp = 100;
                loadingtimer.innerHTML = lp;
                clearInterval(loadinginterval); //save resources
            }
            console.log(lp);
        }, 35);
    }
});

tl.to('.line h2',{
    animationName : 'anime',
    opacity: 1
});

tl.to('#loader',{
    opacity:0,
    duration:0.2,
    delay: 4
});

tl.from('#page1', {
    delay:0.2,
    y:1600,
    opacity:0,
    duration:0.5,
    ease: Power4
});

tl.to('#loader',{
    display:"none"
});