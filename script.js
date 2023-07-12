let back = document.querySelector(".flip-card-back");
let inner = document.querySelector(".flip-card-inner");
let front = document.querySelector(".flip-card-front");
let article = document.querySelector("#reveal");


inner.addEventListener('click', () => {
    front.classList.add('transform');
    back.classList.add('transform');
    back.classList.remove('flip');
    front.classList.add('flip');
    article.classList.remove('hidden');
})

