const addGameForm = document.querySelector('[data-add-game-form]');
const gameTitle = document.querySelector('[data-game-name]');
const gameType = document.querySelector('[data-game-type]');
const gameRate = document.querySelector('[data-game-rate]');
const gameImg = document.querySelector('[data-game-img]');
const formMsg = document.querySelector('[data-form-msg]');
const showFormBtn = document.querySelector('[data-add-game-btn]');
const colseFormBtn = document.getElementById('close-btn');


function showMe() {
var hidingForm = document.getElementById('form-id');
    
    if(hidingForm.style.display == '' || hidingForm.style.display == 'none'){
        hidingForm.style.display = 'flex';
    } else {
        hidingForm.style.display = 'none'
    }
}



addGameForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const reqBody = {
        gameName : gameTitle.value,
        type: gameType.value,
        rating: gameRate.value,
        img: gameImg.value
    }; console.log(reqBody);

    const res = await fetch("http://localhost:4545/game/newGame", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(reqBody),
        
    });
    
    const data = await res.json();

    if (data.error) {
        console.log(123);
        console.log(data.error);
    } else {
        location.reload();
        // formMsg.innerHTML = "Game add successfully"
    }
})