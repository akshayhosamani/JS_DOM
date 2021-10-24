var a=4
if (a===1 || a===0){
      console.log(`${a} is not prime number`)
      }     
      else if(a===2){
            console.log(`${a} is prime number`) 
}     
else{
      for(i=2;i<a;i++){
            var b=a%i    
            if(b===0) {
                  console.log(`${a} is not prime number`)
                  break
            }
      }
            if(b!==0){
                  console.log(`${a} is prime number`)
            }
}
