let promiseCall=(returnData,message)=>{
      return  promiseFunction=(resolve,reject)=>{
            setTimeout(()=>{
                  if(returnData%2===0){
                        console.log(`The ${message} promise has been resolved`)
                        resolve(returnData)
                  }else{
                        reject(`${returnData} is an odd number`)
                        console.log(`The ${message} promise has been rejected`)
                  }
            },returnData*100)
      }
}
let p1=new Promise(promiseCall(8,'first'))
let p2=new Promise(promiseCall(20,'second'))
let p3=new Promise(promiseCall(30,'third'))
let total=0
Promise.all([p1,p2,p3]).then((result)=>{
      for(i in result){
            total+=result[i]
      }
      console.log(result)
      console.log(`Total:${total}`);
}).catch((error)=>{console.log(error)})