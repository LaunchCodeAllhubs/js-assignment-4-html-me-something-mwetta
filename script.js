let back = document.querySelector(".flip-card-back");
let inner = document.querySelector(".flip-card-inner");
let front = document.querySelector(".flip-card-front");


inner.addEventListener('click', () => {
    front.classList.add('transform');
    back.classList.add('transform');
    back.classList.toggle('flip');
    front.classList.toggle('flip');


})