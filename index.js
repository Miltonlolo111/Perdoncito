const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function () {
    alert('Gracias mi aguacatito bello, de verdad de verdad, perdoncito, tengo que apender que tu estas ocupadita muchas veces y no te debo reclamar por eso 😿🙏🏼🙈')
});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover',function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100)
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',rendomX+'%');
    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})