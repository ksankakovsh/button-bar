const num = document.getElementById('num');
const more = document.getElementById('more');
const less = document.getElementById('less');

const sumar = () => {
   removeAnimationClass();
   setTimeout(() =>{
      num.classList.add('animacion');
   }, 10);
   num.innerText++;
   
   console.log(num.innerHTML);
   return num.innerText;
}


const restar = () => {
   removeAnimationClass();
   setTimeout(() =>{
      num.classList.add('animacion2');
   }, 10);
   num.innerText--;
   
   console.log(num.innerHTML);
   return num.innerText;
}


const removeAnimationClass = () => {
   num.classList.remove('animacion2', 'animacion');
}


const testColor = () =>{
   if(num.innerText === '0'){
      num.style.color = '#999';
   }else if(num.innerText < '0'){
      num.style.color = "var(--color__2)";
   }else{
      num.style.color = "var(--color__1)";
   }
}

//auto 
let open;
addEventListener( 'click' , ({target}) => {
if(target.closest('.open-autolist')) return;
let elem;
if(target = target.closest('.auto-btn')) {
const btn = document.querySelectorAll('.auto-btn');
const index = Array.prototype.findIndex.call(btn, el => el === target);
elem = document.querySelectorAll('.auto-list')[index];
if(!elem) return;
elem.classList.toggle('open-autolist');
}
if(open && open != elem) open.classList.remove('open-autolist');
open = elem;
});
//click sound
var spans = document.querySelectorAll('.btn');
[].forEach.call(spans, function(elem){
  elem.addEventListener('click',function(){
    document.getElementById('sound').play();    
  })  
})
