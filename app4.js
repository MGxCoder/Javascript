// let btn=document.querySelector('button');
// let inpu=document.querySelector('input');
let form=document.querySelector('form');
form.addEventListener("submit",function(e){

    e.preventDefault();
    let user=document.querySelector('#user');
    console.log(user.value);


});

// inpu.addEventListener('keydown',function(e){
          
// }
// );
// btn.addEventListener('click',function(){
//     let h1=document.querySelector("h1");
//     let randomcolor=getcolor();
//  h1.innerText=randomcolor;
// console.log(randomcolor);

// let div=document.querySelector('div');

// div.style.backgroundColor=randomcolor;}
//     );

// function getcolor(){
//      let r= Math.floor(Math.random()*256);
//      let g= Math.floor(Math.random()*256);
//      let b= Math.floor(Math.random()*256);

//      let color=`rgb(${r},${g},${b})`;
//      return color;
// }


// // let btn=document.querySelectorAll('button');
// // console.dir(btn);

// // for (btns of btn){
// //     // btns.onclick=sayhello;
// //     // btns.onmouseenter=hi;
// //     btns.addEventListener('click',sayhello);
// //     btns.addEventListener('mouseenter',hi);
// //     btns.addEventListener('dblclick',function(){
// //         console.log('double clicked');
// //         alert('double clicked');
// //     })
// // }


// function sayhello(){
//     console.log('Hello');
//     // alert('Hello');



// }

// function hi(){
//     console.log('mouse triggerred');
//     // alert('Hello');

// }

// // btn.onclick=sayhello()//function(){
// //     console.log('Button clicked');
// //     alert('Button clicked');
// // }

