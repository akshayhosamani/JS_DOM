let RegisterForm=document.querySelector('#register-form');
RegisterForm.addEventListener('submit',function(event){
      event.preventDefault();
     if (validateForm()){
           alert('Registered Successfully')
     }
});
let validateForm=()=>{
    return (  ValidateUsername() & ValidateEmail() & ValidatePassword() & ValidateConfirmPassword())
}
let ValidateUsername=()=>{
     let inputEL=document.querySelector('#username');
     let inputElFeedback=document.querySelector('#username-feedback');
     let regExp=/^[a-zA=Z0-9]{4,10}$/;
      if(regExp.test(inputEL.value)){
            makeValid(inputEL,inputElFeedback);
            return true;
      }else{
            makeInValid(inputEL,inputElFeedback);
            return false;
      }
}
let ValidateEmail=()=>{
      let inputEL=document.querySelector('#email');
      let inputElFeedback=document.querySelector('#email-feedback');
      let regExp=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
       if(regExp.test(inputEL.value)){
             makeValid(inputEL,inputElFeedback);
             return true;
       }else{
             makeInValid(inputEL,inputElFeedback);
             return false;
       }
 }
 let ValidatePassword=()=>{
      let inputEL=document.querySelector('#password');
      let inputElFeedback=document.querySelector('#password-feedback');
      let regExp=/^[a-zA-Z]\w{7,14}$/;
       if(regExp.test(inputEL.value)){
             makeValid(inputEL,inputElFeedback);
             return true;
       }else{
             makeInValid(inputEL,inputElFeedback);
             return false
       }
 }
 let ValidateConfirmPassword=()=>{
      let inputEL=document.querySelector('#c-password');
      let passwordEl=document.querySelector('#password')
      let inputElFeedback=document.querySelector('#c-password-feedback');
      let regExp=/^[a-zA-Z]\w{7,14}$/;
       if(regExp.test(inputEL.value) && inputEL.value===passwordEl.value){
             makeValid(inputEL,inputElFeedback);
             return true;
       }else{
             makeInValid(inputEL,inputElFeedback);
             return false;
       }
 }
let makeValid=(inputEL,inputElFeedback)=>{
      inputEL.classList.add('form-valid');
      inputEL.classList.remove('form-invalid');
      inputElFeedback.classList.add('valid-feedback');
      inputElFeedback.classList.remove('invalid-feedback');
}
let makeInValid=(inputEL,inputElFeedback)=>{
      inputEL.classList.remove('form-valid');
      inputEL.classList.add('form-invalid');
      // inputElFeedback.classList.remove('valid-feedback');
      // inputElFeedback.classList.add('invalid-feedback');
      inputElFeedback.textContent=`Please enter valid ${inputEL.placeholder}`;
}
document.querySelector('#username').addEventListener('keyup',function(){
      ValidateUsername();
});
document.querySelector('#email').addEventListener('keyup',function(){
      ValidateEmail();
});
document.querySelector('#password').addEventListener('keyup',function(){
      ValidatePassword();
});
document.querySelector('#c-password').addEventListener('keyup',function(){
      ValidateConfirmPassword();
});