// var element;
// // element=document.querySelectorAll('p');
// var ele=document.querySelectorAll('.abc h1')[1].innerHTML="Akshay"
// console.log(ele)
// console.log(element)
// // var col=document.querySelectorAll('.list')[1].style.backgroundColor="pink";
// var pl=document.getElementsByClassName('list')[0].style.backgroundColor="pink"
// // var cname=document.querySelector('#header').className="clr"
// var cname=document.querySelector('#head1').className="clr"
// document.querySelector('#head2').classList.add("efg","hij")
// var cl=document.querySelector('#head2').classList;
// console.log(cl);
// document.getElementById('c-pink').onclick=abc;
// function abc(){
//       document.getElementById('c-pink').style.background="pink"
// }
// document.getElementById('c-pink').addEventListener("click",function(){
//       this.style.background="pink"
// });
//       document.getElementById('c-pink').addEventListener("mouseleave",function(){
//       this.style.color="rgb(245, 90, 0)"
// });
//       document.querySelector('body').addEventListener('contextmenu',function(){
//            alert("Right click is not allowed here")
//       });
// document.querySelector("body").addEventListener("contextmenu", function(e){
//       alert("Right click is not allowed here")
//       e.preventDefault()
//     });
// document.getElementById('btn').addEventListener('click', function(){
//             var str=document.getElementById("myList2").lastElementChild
//             if (str!=undefined){
//             document.getElementById('myList1').appendChild(str);
//       }
//       else{
//             alert("No more elements to add")
//       }
// });
// var x=document.querySelectorAll('');
// console.log(x)var allClasses = [];
var allClasses = [];
var allElements = document.querySelectorAll('*');

for (var i = 0; i < allElements.length; i++) {
  var classes = allElements[i].className.toString().split(' ');
  for (var j = 0; j < classes.length; j++) {
    var cls = classes[j];
    if (cls && allClasses.indexOf(cls) === -1)
      allClasses.push(cls);
  }
}

console.log(allClasses);


      