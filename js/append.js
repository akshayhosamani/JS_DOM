var newh2=document.createElement('h2');
var text=document.createTextNode('This Text is Appended as Heading');
newh2.appendChild(text);
var a=document.getElementById('test','test1');
a.appendChild(newh2);
a.addEventListener('click',function(){
    a.classList.add('test1')
});

// insert adjacent element
// var a=document.getElementById('test1');
var b=document.createElement('h1');
var c=document.createTextNode('Namaste');
b.appendChild(c)
document.getElementById('test1').insertAdjacentElement('afterend',b)
//insert adjacent HTML

var d='<h2>Added Heading</h2>'
document.getElementById('test2').insertAdjacentHTML('afterbegin',d)