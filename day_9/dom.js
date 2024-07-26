
setTimeout(() => {
   let a = document.getElementById("h1").innerText = "changed by js dom";
   
},2000);

let a = document.getElementsByClassName("pa");
a[0].style.backgroundColor = "red";

document.getElementById("b").style.backgroundColor = "blue";

let b = document.createElement("div");
b.innerText="new div";

document.body.appendChild(b);

let d = document.createElement("li");

d.innerText="new list item";

document.getElementById("ul").appendChild(d);

let e = document.getElementById("testid")
e.remove();
 
let f  = document.getElementById("1");

let z= f.lastElementChild;


z.remove();

setTimeout(() => {
    let im = document.getElementById("im");
im.src="cars-8891625_1280.jpg";
}, 3000);

let dd = document.getElementById("1");

 dd.setAttribute("style", "background-color:yellow","font-size:30px");
//dd.removeAttribute("style");
document.getElementById("btn").addEventListener("click", function() {
    let a =document.getElementsByClassName("pa");
    a[0].innerHTML = "changed by button click";
    console.log(a);
});

document.getElementById("im").addEventListener("mouseover", function() {
    this.style.borderRadius = "50%";
})
document.getElementById("im").addEventListener("mouseout", function() {
    this.style.borderRadius = "0";
})





