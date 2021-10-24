let prom=complete=>{
    return  new Promise(function(resolve,reject){
          console.log('Fetching data please wait...')
          setTimeout(()=>{
            $.get('',function(data){
                  resolve(data);
            }).fail(err=>{
                  reject('Failed to load')
            })
      },3000)
      });
}
prom(1).then((success=>{
      console.log(success);
}))
.catch((failed=>{
      console.log(failed);
}))