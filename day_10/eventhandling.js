let a = false;
document.getElementById("btn").addEventListener("click", function() {
    a?document.getElementById("pp").innerText="it will change on clicking the button":document.getElementById("pp").innerText="changed by button click";
    
    if (a){
        a=false;
    }
    else{
        a=true;
    }
    a ? document.getElementById("btn").innerText="undo":document.getElementById("btn").innerText="clickme";
});

document.getElementById("im").addEventListener("dblclick", function() {
    document.getElementById("im").style.display="none";
});

document.getElementById("btn2").addEventListener("click", function() {
    document.getElementById("im").style.display="block";
});

document.getElementById("div1").addEventListener("mouseover", function() {
    document.getElementById("div1").style.backgroundColor="red";
    document.getElementById("div1").style.borderRadius="20px";
});
document.getElementById("div1").addEventListener("mouseout", function() {
    document.getElementById("div1").style.backgroundColor="";
});

document.getElementById("inp").addEventListener("keydown", function(e) {
    if(e.key ){
        
        console.log(e.target.value);
    }
});
document.getElementById("inp").addEventListener("keyup", function(e) {
    
        
        console.log(e.target.value);
    
});
document.getElementById("fo").addEventListener("submit", function(e) {
    e.preventDefault();
    console.log(document.getElementById("fname").value);
    console.log(document.getElementById("lname").value);
});

document.getElementById("sel").addEventListener("change", function() {
    let a = document.getElementById("sel").value;
    console.log(a);
    let b = document.createElement("p")
    b.innerText = `your selected option is ${a}`;
    
    document.body.append(b);
});
document.getElementById("ul").addEventListener("click", function(e) {
    if(e.target.tagName === "LI"){
        console.log(e.target.innerText);
    }
    
});




