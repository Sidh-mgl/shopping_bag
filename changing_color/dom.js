let x = document.querySelector("h1");
let y = document.querySelector("h2");
let z = document.querySelector("h3");

x.addEventListener("click" , function(){
    x.style.backgroundColor = "yellow"
    x.style.color = "orange";
})
x.addEventListener("click" , function(){
    y.style.backgroundColor = "green"
    y.style.color = "blue";
})
x.addEventListener("click" , function(){
    z.style.backgroundColor = "orange"
    z.style.color = "lightblue";
})
