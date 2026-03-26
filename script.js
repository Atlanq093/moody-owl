const owl = document.querySelector('.owl img');
const note = document.getElementById('note');
const question = document.querySelector('.container p.hidden');
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');

const messages = [
    "Why? 🥺",
    "Why are you doing this to me? 😢",
    "No please, think again... 💔",
    "Wait, wait no... 😨",
    "Please agree 🤕",
    "I'm begging you... 🙏",
    "You're breaking my heart 💔",
    "Are you sure? 😳",
    "I will cry... 😭",
    "This is not okay 😤",
    "I thought you liked me... 🥀",
    "One more chance? 🫶",
    "I made you a playlist and everything... 🎵",
    "My owl is also sad now 🦉💔",
    "Last chance I promise... 🥹",
    "Click yes, please 😰"
];

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

let clickCount = 0;
let yesScale = 1;

function answerNo(){
    owl.src = "images/3.png";

    if (clickCount === 0) {
        document.body.style.backgroundImage = "url('https://media.giphy.com/media/3o6ozmF4ZGOG3DWZyg/giphy.gif')";
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "center";
    }

    question.textContent = messages[Math.min(clickCount, messages.length - 1)];
    clickCount++;

    yesScale += 0.1;
    yesBtn.style.transform = `scale(${yesScale})`;
    yesBtn.style.transformOrigin = 'center';
}