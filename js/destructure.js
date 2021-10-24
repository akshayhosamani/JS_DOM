let student={
      name:'Akshay',
      lname:'Hosamani',
      age:24,
      address:{
            street:'APMC',
            town:'Bagewadi',
            pin:586203,
      },
      hobbies:{
            regHobbies:{
            regular: ['playing cricket', 'playing chess']
            },
            occasionalHobbies:{
                  occasional:['reading books', 'watching movies']
            }
      },
}
let {regHobbies}=student.hobbies;
console.log(regHobbies.regular);
let {street,town,pin}=student.address
console.log(`Street:${street}\nTown:${town}\nPin:${pin}`)