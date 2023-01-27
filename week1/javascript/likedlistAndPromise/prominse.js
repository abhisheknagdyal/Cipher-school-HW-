// let promise = new Promise((fullfiled, notfullfilled)=>{
//     let num1= 10;
//     let num2 =50;
//     let sum = num1 +num2;
//     if(sum>24){
//         fullfiled(sum);
//     }else{
//         notfullfilled(new Error("Promise not fullfilled"));
//     }
// });

function addTwoNumber(num1, num2){
    return new Promise(fullfilled, notfullfilled);
    setTimeout(()=>{
            fullfilled(num1 + num2)
        },5000);
        notfullfilled(new Error("an error occurred"));
}

addTwoNumber(10,5).then(()=>{
    console.log("Promise fullfilled");
}).catch(()=>{
    console.log("promise not fullfilled");
}).finally();


// function testFunction(num1, num2){
//     let sum =0;
//     setTimeout(()=>{
//         console.log(num1 + num2)
//     },5000);
//     return num1 + return2;
// }



console.log(addTwoNumber(2,3));