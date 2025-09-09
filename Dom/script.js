let h1 = document.getElementById("one")
console.log(h1);
h1.style.color='red'


let h2 = document.getElementsByClassName("two")
console.log(h2);

for(let i of h2){
    i.style.color='blue'
}

h2[1].style.color='grey'


let h3 = document.querySelector(".four")
console.log(h3.innerText="hiii");
h3.style.color='green'


// let h4 = document.querySelectorAll(".two")
// console.log(h4);

let a = document.querySelector("a")
a.setAttribute("href","http://flipkart.com")
console.log(a.getAttribute("href"));


