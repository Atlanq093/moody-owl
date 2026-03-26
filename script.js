const owl = document.querySelector('.owl img');
const note = document.getElementById('note');
const question = document.querySelector('.container p.hidden');
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');



owl.addEventListener('click',()=>{
    note.classList.add('hidden');
    question.classList.remove('hidden');
    yesBtn.classList.remove('hidden');
    noBtn.classList.remove('hidden')
})


function answeryes(){
    question.textContent="See you soon 😍";
    owl.src ="images/2.png"
    yesBtn.classList.add('hidden');
    noBtn.classList.add('hidden');
    owl.removeEventListener('click');
    const backgrounds = [
  "https://usagif.com/wp-content/uploads/gif-heart-39.gif",
  "https://usagif.com/wp-content/uploads/gif-heart-38.gif",
  "https://usagif.com/wp-content/uploads/gif-heart-37.gif"
];

let index = 0;

setInterval(() => {
  document.body.style.backgroundImage = `url('${backgrounds[index]}')`;
  index = (index + 1) % backgrounds.length;
}, 3000); // zmiana co 3 sekundy
}
function answerNo(){
    question.textContent="Nuh uh?";
    owl.src ="images/3.png"
    yesBtn.classList.add('hidden');
    noBtn.classList.add('hidden');
}
