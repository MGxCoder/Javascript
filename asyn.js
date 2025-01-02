// async function greet(){
//     // throw new Error('Something went wrong');
//     return 'Hello World';
// }

// greet()
//     .then(()=>{
//         console.log('Promise resolved');
//     })
// .catch((err)=>{
//     console.log('error')
// })


function getnum(){
    return  new Promise((resolve, reject)=>{
        setTimeout(() => {
            let num=Math.floor(Math.random()*10)+1;
        
            console.log(num);
            resolve();
        }, 1000);
   
        });
        }
async function demo() {
    await getnum();
    getnum();
    getnum();
}
let h1=document.querySelector('h1');
function color(color,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(() =>{
            h1.style.color=color;
            console.log(`color changed to ${color} ` ); 
            resolve('color changed');
        });
},delay);}

async function cc(){
    await color('red',3000);
    await color('green',1000);
    color('blue',2000);
}

