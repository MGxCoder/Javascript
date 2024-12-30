function  one(){
    console.log('one');
    return 1;
}


function two(){
    console.log('two');
    return  one ()+one();

}

function three(){
    console.log('three');
    let ans=two()+one();
    console.log(ans);
}

console.log('begin');
three();