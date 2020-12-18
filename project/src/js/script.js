/***********Slick slider***************/

$('.projects__slider').slick({
    autoplay: true,
    dots: true,
    arrows: true,
    fade: true,
});

// skills__circle-animate_7
/**************Animate******************/

let animItems = document.querySelector('._line');
let points = document.querySelectorAll('._point');
let circleItems = document.querySelectorAll('.skills__circle-border');
const skills = document.querySelectorAll('.skills__number');

let arrCount = [0, 0, 0, 0, 0, 0, 0];
let arrMax = [75, 41, 59, 70, 52, 64, 50]

if (animItems){
    window.addEventListener('scroll', animOnScroll)
    function animOnScroll(params){
        const animItemHeight = animItems.offsetHeight;
        const animItemOffset = offset(animItems).top;
        const animStart = 4;
        

        let animItemPoint = window.innerHeight - animItemHeight / animStart;

        if (animItemHeight > window.innerHeight){
            animItemPoint = window.innerHeight - window.innerHeight / animStart;
        }

        if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){
            animItems.classList.add('_show', 'about__line');
            points.forEach((item) => {
                item.classList.add('about__point');
            })
        } 
    }
    animOnScroll();
}

if (circleItems){
    window.addEventListener('scroll', animOnScrollCircle)
    function animOnScrollCircle(params){
        const circleItem = circleItems[1];
        const circleHeight = circleItem.getBoundingClientRect().height;;
        const animItemOffset = offset(circleItem).top;
        const animStart = 4;


        let animItemCircle = window.innerHeight - circleHeight / animStart;
        if (circleHeight > window.innerHeight){
            animItemCircle = window.innerHeight - window.innerHeight / animStart;
        }

        if ((pageYOffset > animItemOffset - animItemCircle) && pageYOffset < (animItemOffset + circleHeight)){
            circleItems.forEach((item, index) => {
                item.classList.add(`skills__circle-animate_${index+1}`);
            });
            window.removeEventListener('scroll', animOnScrollCircle);
            animOnNumber();
        } 
    }
}

function offset(el) {
    const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    return {top: rect.top + scrollTop, left: rect.left + scrollLeft }
}

function animOnNumber(){
    if (circleItems[0].classList.contains(`skills__circle-animate_${1}`)){
        for(let i = 0; i < arrMax.length; i++){
            let Idn = setInterval(() => {
                skills[i].innerHTML = `${arrCount[i]}%`;
                arrCount[i]++;
                if (arrCount[i] > arrMax[i]){
                    clearInterval(Idn);
                }
            }, 27)
        }
    }
}


let linkNav = document.querySelectorAll('[href^="#"]'),
    V = 0.2; 
for (let i = 0; i < linkNav.length; i++) {
    linkNav[i].addEventListener('click', function(e) {
        e.preventDefault();
        let w = window.pageYOffset,
            hash = this.href.replace(/[^#]*(.*)/, '$1');
        t = document.querySelector(hash).getBoundingClientRect().top, 
            start = null;
        requestAnimationFrame(step);
        function step(time) {
            if (start === null) start = time;
            let progress = time - start,
                r = (t < 0 ? Math.max(w - progress/V, w + t) : Math.min(w + progress/V, w + t));
            window.scrollTo(0,r);
            if (r != w + t) {
                requestAnimationFrame(step)
            } else {
                location.hash = hash 
            }
        }
    }, false);
}

(function(d){
    function c(k){return(d.cookie.match('(^|; )'+k+'=([^;]*)')||0)[2];}
    var ua = navigator.userAgent,
        ismobile = / mobile/i.test(ua),
        mgecko = !!( / gecko/i.test(ua) && / firefox\//i.test(ua)),
        wasmobile = c('wasmobile') === "was",
        desktopvp = 'user-scalable=yes, width=1600, minimum-width=1600',
        el;
    if (ismobile && !wasmobile) {
        d.cookie = "wasmobile=was";
    }
    else if (!ismobile && wasmobile) {
        if (mgecko) {
            el = d.createElement('meta');
            el.setAttribute('content', desktopvp);
            el.setAttribute('name', 'viewport');
            d.getElementsByTagName('head')[0].appendChild(el);
        }else{
            d.getElementsByName('viewport')[0].setAttribute('content', desktopvp);
        }
    }
}(document));