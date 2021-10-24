var a
            var textLength=document.getElementById('textarea');
            var charLength=document.getElementById('length');
            textLength.addEventListener('keyup',function(){
            var length=textLength.value.length;
            a=document.getElementById('length');
            a.innerText=length;
      });
            let fn=()=>{
            if(a.innerText<100){
                  alert("Characters should not be less than 100");
            }
            if(a.innerText==100){
                  alert("SMS sent successfully");
            }
            console.log(textLength.value.length)
      }