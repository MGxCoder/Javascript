let nums =[1,2,3,4,5,6];

let double=nums.map((el)=>{
    return el*el;
});


let even = nums.filter((el) =>{
    return el=el % 2==0;
});

let odd = nums.filter((el) =>{
    return el% 2!=0;
});

let red= nums.reduce((res,el)=>{
    return res+el;
});

let max= nums.reduce((max,el)=>{
    if(max<el){
        return el;
    }else{
        return max;

    }
});

tens=[10,20,30,40,6,7]
let multi = tens.filter((el) =>{
    return el=el % 10==0;
});

let getmin=tens.reduce((min, el)=>{
    if(min<el){
        return min;
    }else{
        return el;
    }
});