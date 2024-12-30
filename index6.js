let btn=document.querySelector('button');
let inp=document.querySelector('input');
let ul=document.querySelector('ul');
btn.addEventListener('click',function(){

        let items=document.createElement('li');

        
        items.innerText=inp.value;
        let delbtn=document.createElement('button');
        delbtn.innerText='Delete';
        delbtn.classList.add('delete');
        items.appendChild(delbtn);
        ul.appendChild(items);
       inp.value='';
   

});

let delbtns=document.querySelectorAll('.delete');
for(delbtn of delbtns){
    delbtn.addEventListener('click',function(){
       let par= this.parentElement;
  
        par.remove();
  
    });
}

ul.addEventListener('click',function(e){
    if(e.target.nodeName=="BUTTON"){
        let par= e.target.parentElement;
        par.remove();
    }
});