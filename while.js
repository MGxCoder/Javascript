let i=1;
while(i<=5){
    console.log(i);
    i++;
}

const fav="avtar";
let guess=prompt("guees my movie")
    while((guess !=fav) && (guess!='quit')){
    
   
        
        if(guess=="quit"){
            console.log("better luck next time");
            break;
        }
        guess=prompt("guees my movie");
    }

if(guess==fav){
    console.log("congrats");
}
