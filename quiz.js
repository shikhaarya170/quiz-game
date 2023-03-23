

const screen1 = document.querySelector('#screen1');
const screen2 = document.querySelector('#screen2');
const screen3 = document.querySelector('#screen3');
const start = document.querySelector('#start')
const timer = document.querySelector('.timer')
let timer1 =5 ;

start.onclick = () =>{
    screen1.style.display= "none";
    screen2.style.display ="flex";
}

let x =setInterval(timerstop,1000)

 function timerstop()
{
    if(timer1==0){

        clearInterval(x)
    }else{
         timer.innerHTML = timer1--
    }
}
   
 nextquestion()
 showoption()



function nextquestion(){
    
}
const data =[
    {
        question:2+2,
        answer:4,
        Option:[2,0,3,4],
    },

    {
        question:3*3,
        answer:9,
        option:[2,4,6,9],
    },

    {
        question:9%3,
        answer:3,
        option:[2,4,6,8]
    },

    {
       question:2+2-4,
       answer:0,
       option:[2,1,0,4]
    }


]



