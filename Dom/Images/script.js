let arr = ["spiderman_img.png",
        "creation_2.jpeg",
        "creation_3.jpeg"]
let img = document.querySelector("img")

let count = 0;

setInterval(()=>{
    img.setAttribute("src",arr[count])
    count= [count+1]% arr.length
},2000)

