

document.querySelector("#tag-about-me").addEventListener("click",function(){
    window.location.href="#about";
})

document.querySelector("#tag-skill").addEventListener("click",function(){
    window.location.href="#skills";
})

document.querySelector("#contact-tag").addEventListener("click",function(){
    window.location.href="#contact";
})

document.querySelector("#resume-tag").addEventListener("click",function(){
    window.location.href="#resume";
})

document.querySelector("#project-tag").addEventListener("click",function(){
    window.location.href="#MyProjects";
})

document.querySelector("#github").addEventListener("click",function(){
    window.open("https://github.com/ritesh19331","_blank");
})

document.querySelector("#linkedIn").addEventListener("click",function(){
    window.open("https://www.linkedin.com/in/ritesh-kumar-21ba18238/","_blank");
})

document.querySelector("#section-home").addEventListener("click",function(){
    window.location.href="#home";
})

document.querySelector("#resume-tag").addEventListener("click",function(){
    window.open("https://drive.google.com/file/d/13jNhT0HcSrJiTkXgGxm41IXBQNXkgbjz/view?usp=sharing","_blank");
})

document.querySelector("#project-1-live").addEventListener("click",function(){
    window.open("https://dainty-queijadas-73d32e.netlify.app","_blank");
})

document.querySelector("#project-1-code").addEventListener("click",function(){
    window.open("https://github.com/ritesh19331/lame-crayon-5872","_blank");
})



// <-----typing effect ----->

var i = 0;
var txt = 'Java Backend Developer'; /* The text */
var speed = 120; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("home-name-col-3").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
typeWriter()
// let navbar=`<div id="section-home"><div>Home</div></div>
// <div id="section-tag">
//     <div id="tag-about-me" >About Me</div>
//     <div id="tag-skill">Skills</div>
//     <div id="project-tag">Project</div>
//     <div id="contact-tag">Contact</div>
//     <div id="resume-tag">Resume</div>
// </div>`
// document.getElementsByClassName("contrib-column contrib-column-first table-column").innerHTML="";

// let intervalID;

// function repeatEverySecond() {
//   intervalID = setInterval(widthCheck, 100);
// }

// // document.querySelecto

// function widthCheck() {
//     console.log("hey")
//   if(window.screen.availWidth<"500"){
//     console.log("heyy")
//     document.querySelector("#navbar").innerHTML="";
//   } else if(window.screen.availWidth>="500"){
//     document.querySelector("#navbar").innerHTML=navbar;
//   }
// }

// repeatEverySecond();

