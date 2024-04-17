document.querySelector("#project-2-live").addEventListener("click",function(){
  window.open("https://drive.google.com/file/d/1sbib9Ocqtynro8O1stOcscX6_K1-1JIN/view?usp=sharing","_blank");
})



document.querySelector("#project-2-code").addEventListener("click",function(){
  window.open("https://github.com/ritesh19331/berserk-cloth-744","_blank");
})
document.querySelector("#project-4-live").addEventListener("click",function(){
  window.open("https://aesthetic-mochi-4eb611.netlify.app/","_blank");
})



document.querySelector("#project-4-code").addEventListener("click",function(){
  window.open("https://github.com/masai-course/ritesh_fw20_0402/tree/ffb32da1909e7c2bbd9996940f00e940b4d39ff8/unit-3/sprint-3/day-1/assignments","_blank");
})
document.querySelector("#project-3-live").addEventListener("click",function(){
  window.open("https://drive.google.com/file/d/1sbib9Ocqtynro8O1stOcscX6_K1-1JIN/view","_blank");
})



document.querySelector("#project-3-code").addEventListener("click",function(){
  window.open("https://github.com/ritesh19331/puny-leather-5605","_blank");
})
document.querySelector("#github").addEventListener("click",function(){
    window.open("https://github.com/ritesh19331","_blank");
})

document.querySelector("#linkedIn").addEventListener("click",function(){
    window.open("https://www.linkedin.com/in/ritesh-kumar-21ba18238/","_blank");
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



/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}





// let obj1= {
//     "project_name": "Sendinblue Clone",
//     "details": ["Sendinblue is the smartest and most intuitive platform for growing businesses.",
//                 "Thrive digitally as we guide your business with the right marketing & sales tools.",
//                 "We’ll be here round-the-clock to support you with any questions."
//                 ],
//     "image": "./images/project1.png",
//     "techStack":["./images/html.png","./images/css3.png","./images/javascript.png"],
//     "data_base": "local storage",
//     "banner":"./images/project1.png",
//     "deployed": "https://dainty-queijadas-73d32e.netlify.app/",
//     "gitlink": " https://github.com/ritesh19331/lame-crayon-5872"
// }
// let arr =[obj1];
// let projects = document.querySelector("#ritesh");
// console.log(projects);
// arr.forEach(obj => {
//     console.log(obj)
//     let box = document.createElement("div");
//     box.setAttribute("id","project-1")
//     let project_col1 = document.createElement("div");
//     project_col1.setAttribute("id","#project-1-col-1")
//     let banner = document.createElement("img");
//     banner.setAttribute("src",obj.banner);

//     let tech_stack_heading = document.createElement("p");
//     tech_stack_heading.innerText="Tech Stacks";

//     let div1 = document.createElement("div");

//     for(let i=0; i<obj.techStack.length; i++){
//         let tech_img = document.createElement("img");
//         tech_img.setAttribute("src",obj.techStack[i]);
//         div1.append(tech_img);
//     }

//     project_col1.append(banner,tech_stack_heading,div1)


//     let project_col2 = document.createElement("div");

//     let heading =  document.createElement("p");
//     heading.innerText=obj.project_name;

//     let ul = document.createElement("ul");

//     for(let i=0; i<obj.details.length; i++){
//         let li = document.createElement("li");
//         li.innerText=obj.details[i];
//         ul.append(li);
//     }

//     let project_dl = document.createElement("div");
//     project_dl.setAttribute("id","project-1-live-code");

//     let live_button = document.createElement("button");

//     live_button.innerText="Live";
//     live_button.setAttribute("id","project-1-live");
//     live_button.setAttribute("onclick",obj.deployed);

//     let github_button =  document.createElement("button");
//     github_button.setAttribute("id","project-1-code")
//     github_button.setAttribute("onclick",obj.gitlink);

//     box.append(project_col1,project_col2)
//     projects.append(box);
    
// })


