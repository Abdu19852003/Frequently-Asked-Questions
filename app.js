// Variables
const accordion=document.getElementsByClassName(`content-container`);
const div=document.querySelector(".div")

for(i=0;i<accordion.length;i++){
    accordion[i].addEventListener(`click`,function(){
        this.classList.toggle(`active`)
       
    })
}

