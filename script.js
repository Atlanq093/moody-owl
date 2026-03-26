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
    question.textContent="I knew it see you soon😍";
    owl.src ="images/2.png"
    yesBtn.classList.add('hidden');
    noBtn.classList.add('hidden');
}
function answerNo(){
    question.textContent="Think twice,are you sure";
    owl.src ="images/3.png"
    yesBtn.classList.add('hidden');
    noBtn.classList.add('hidden');
}
