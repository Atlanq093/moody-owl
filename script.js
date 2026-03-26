const owl = document.querySelector('.owl img');
const note = document.getElementById('note');
const question = document.querySelector('.container p.hidden');
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');



function owlClick() {
    note.classList.add('hidden');
    question.classList.remove('hidden');
    yesBtn.classList.remove('hidden');
    noBtn.classList.remove('hidden');
}

owl.addEventListener('click', owlClick);


function answeryes(){
    question.textContent="I knew it see you soon😍";
    owl.src ="images/2.png"
    yesBtn.classList.add('hidden');
    noBtn.classList.add('hidden');
   owl.removeEventListener('click', owlClick); 
  setTimeout(() => {
    document.body.style.backgroundImage = "url('https://usagif.com/wp-content/uploads/gif-heart-39.gif')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
}, 1000);
}
let clickCount=0
function answerNo(){
    clickCount++

    if(clickCount===1){
        question.textContent="Why? 🥺";
    } else if (clickCount === 2) {
        question.textContent = "Why are you doing this to me? 😢";
    } else if (clickCount === 3) {
        question.textContent = "No please, think again... 💔";
    } 

    owl.src ="images/3.png"
    moveButton(); 
    yesBtn.classList.add('hidden');
    noBtn.classList.add('hidden');
}