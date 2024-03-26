
const container = document.querySelector('.navbar');

const btn = document.querySelector('.btn');

console.log(btn);
console.log(container);

btn.addEventListener("click", ()=>{
    btn.remove();
})