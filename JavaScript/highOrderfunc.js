// function outer(){
//     function inner(){
//         console.log("inner");
        
//     }
//     return inner
// }
//  let a = outer()
//  a()


function outer(a){
   a()
}
function inner(){
    console.log("inner");
    
}

 outer(inner)


