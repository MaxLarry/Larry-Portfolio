const parallax_el = document.querySelectorAll(".Parallax");
let xValue = 0, yValue = 0;
let rotateDegree = 0;

function update(cursorPosition) {
  parallax_el.forEach((el) => {
    let speedx = el.dataset.speedx;
    let speedy = el.dataset.speedy;
    let speedz = el.dataset.speedz;
    let rotateSpeed = el.dataset.rotation;

    let isinLeft = parseFloat(getComputedStyle(el).left) < window.innerWidth / 2 ? 1 : -1;
    let zValue = (cursorPosition - parseFloat(getComputedStyle(el).left)) * isinLeft * 0.1;

    el.style.transform = `perspective(2300px) translateZ(${zValue * speedz}px) 
    rotateY(${rotateDegree * rotateSpeed}deg) 
    translateX(calc(-50% + ${-xValue * speedx}px)) 
    translateY(calc(-50% + ${yValue * speedy}px))`;
  });

}

update(0);

parallax_el.forEach((el) => { 
    el.style.transition = "0.15s cubic-bezier (0.1, 0.39, 0.22, 0.79)";
});

window.addEventListener("mousemove", (e) => {
    if (timeline.isActive()) return;

    xValue = e.clientX - window.innerWidth / 2; 
    yValue = e.clientY - window.innerHeight / 2;
    rotateDegree = (xValue / (window.innerWidth / 2)) * 20;
    update(e.clientX);
});

/*****gasp*** */
let timeline = gsap.timeline({ paused: true });

Array.from(parallax_el)
  .filter((el) => !el.classList.contains("text"))
  .forEach((el) => {
    timeline.from(
      el,
      {
        top: `${el.offsetHeight / 2 + +el.dataset.distance}px`,
        duration: 3.5,
        ease: "power3.out",
      },
      "1"
    );
  });

timeline.from(
  ".para-text h2",
  {
    y: 300,
    opacity: 0,
    duration: 1.7,
  },
  "2.5"
).from(
  ".para-text img",
  {
    y: -150,
    opacity: 0,
    duration: 1.5,
  },
  "3"
);

// Use ScrollTrigger to trigger the timeline when entering the "para" section
ScrollTrigger.create({
  trigger: ".para",
  start: "top center",
  onEnter: () => {
    timeline.play();
  },
  onLeaveBack: () => {
    timeline.reverse();
  },
});
