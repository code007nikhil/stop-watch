var minutes = document.querySelector("#minutes");
var seconds = document.querySelector("#seconds");
var miliseconds = document.querySelector("#miliseconds");
var btnstart = document.querySelector("#btn-start");
var btnstop = document.querySelector("#btn-stop");
var btnreset = document.querySelector("#btn-reset");
var min = 0;
var sec = 0;
var mili = 0;
var interval ;




btnstart.addEventListener("click",function(){
  interval =setInterval(()=>{
      onstart();
   },10)
})

btnstop.addEventListener("click",function(){
    clearInterval(interval)
})
btnreset.addEventListener("click",function(){
    clearInterval(interval);
    sec = 0 ;
    mili = 0 ;
    min = 0;
    miliseconds.innerHTML = "00";
    seconds.innerHTML = "00";
    minutes.innerHTML = "00";


})


function onstart(){
    mili++;
    if(mili < 9){
        miliseconds.innerHTML = "00" 
    }
    else if(mili == 9){
        miliseconds.innerHTML = "0" + 9
    }
    else if(mili > 9 && mili < 100){
        miliseconds.innerHTML = mili;
    }
    else if(mili > 99){
        sec++;
        if (sec < 9) {
            seconds.innerHTML = "0" + sec;
        }
        else if(sec > 9 && sec <=60){
            seconds.innerHTML =  sec;
        }
        else if(sec > 60){
            min++;
            if(min < 9){
                minutes.innerHTML = "0" + min;
            }
            else if(min > 9 && min <=60){
                minutes.innerHTML =  min;
            }
            sec = 0;    
        }


        mili = 0;
    }
}