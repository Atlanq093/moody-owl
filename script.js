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
    document.body.style.backgroundImage = "url('https://img1.picmix.com/output/stamp/normal/1/8/4/9/1329481_6cf09.gif')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
}, 500);
}
let clickCount=0
let yesScale = 1;
function answerNo(){
    owl.addEventListener('click', owlClick);
    owl.src ="images/3.png"
    clickCount++

    if(clickCount===1){
        question.textContent="Why? 🥺";
        document.body.style.backgroundImage = "url('https://media.giphy.com/media/3o6ozmF4ZGOG3DWZyg/giphy.gif')";
         document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    } else if (clickCount === 2) {
        question.textContent = "Why are you doing this to me? 😢";
    } else if (clickCount === 3) {
        question.textContent = "No please, think again... 💔";
    } else if (clickCount === 4) {
        question.textContent = "Wait,wait no ... 😨";
     } else if (clickCount===5){
            question.textContent="Please agree 🤕"
        }
        else if (clickCount===5){
            question.textContent="Please agree 🤕"
        }
        else if (clickCount===6){
             question.textContent = "I'm begging you... 🙏";
        }
        else if (clickCount===7){
               question.textContent = "You're breaking my heart 💔";
        }
         else if (clickCount === 8) {
        question.textContent = "Are you sure? 😳";
    } else if (clickCount === 9) {
        question.textContent = "I will cry... 😭";
    } else if (clickCount === 10) {
        question.textContent = "This is not okay 😤";
    } else if (clickCount === 11) {s
        question.textContent = "I thought you liked me... 🥀";
    } else if (clickCount === 12) {
        question.textContent = "One more chance? 🫶";
    } else if (clickCount === 13) {
        question.textContent = "I made you a playlist and everything... 🎵";
    } else if (clickCount === 14) {
        question.textContent = "My owl is also sad now 🦉💔";
    } else if (clickCount === 15) {
        question.textContent = "Last chance I promise... 🥹";}
    else{
        question.textContent ="Click yes ,please 😰"
       
      
} yesScale += 0.1; 
    yesBtn.style.transform = `scale(${yesScale})`;
    yesBtn.style.transformOrigin = 'center';
   
  
}
