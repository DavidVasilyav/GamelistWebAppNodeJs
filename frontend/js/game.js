const gameContainer = document.querySelector('[data-game-container]');
const disableBtn = document.getElementsByClassName('btn-class').disable = true;
console.log(disableBtn);

const USER_END_POINT = "http://localhost:4545/user";
const GAME_END_POINT = "http://localhost:4545/game";

const paramsId = localStorage.getItem('UserId')

function showGames() {
    fetch(GAME_END_POINT)
    .then((res) => res.json())
    .then((games) => renderGames(games))
};

async function saveGame(_id, gameName, typeOf, rating, img) {
    try {
    const body = { 
        id: _id, 
        name: gameName, 
        genere: typeOf, 
        rate : rating, 
        gameImg: img 
    }; 
        await fetch(USER_END_POINT + `/favorit/${paramsId}`, {
            method: 'POST',
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(body),
        })
        .then((res) => res.json())
        .then((clg) => console.log(clg));

    } catch (error) {
        console.log(error);
    }

    };

    function removeGame( _id ) {
        const body = { id : _id}

        fetch(GAME_END_POINT + '/delete', {
            method: "DELETE",
            headers: {
                 "Content-type": "application/json",

            }, body: JSON.stringify(body)
        })
        .then((res) => res.json())
        .then((clg) => console.log(clg));
        location.reload();

    }
    
    function scoreColor(rate) {
        if(rate >= 5) {
            return '#2cb67d'
        } else return 'red'
        
    }



function renderGames(Games) {
   gameContainer.innerHTML = Games.data.map(
        (game) => 
        `
    <table class="table"> 
     <tr>
        <th scope="row"><img class="game-img" src="${game.img}"></th>

        <td id="name-row">${game.gameName}</td>

        <td id="type-row">${game.type}</td>

        <td id="rate-row" style="color:${scoreColor(game.rating)}" >${game.rating}/10</td>
        
        <td 
        class="game-btn"> 
        <button data-btn-save id="disable-btn" class="btn-class" type="button" onclick="saveGame('${game._id}', '${game.gameName}', '${game.type}', '${game.rating}', '${game.img}')"
        >Save to favorit
        </button>

        <button
        type="button" onclick="removeGame('${game._id}')"
        >Remove
        </button>
        </td>
     </tr>
    </table>

       `
        ).join(" ");
}

window.addEventListener("DOMContentLoaded", showGames());


{/* <td>${game.type}</td> */}
    //   <td>${game.rating}</td>
    //   <td>
    //   <img class="game-img" src="${game.img}">
    //   </td>




    // //     `
    // //     <div id="game-table">
    // //     <table class="table">
    // //     <thead>
    // //        <tr class="tag-box">
    // //         <th 
    // //         class="tag-data tag-name" scope="col">${game.gameName}
    // //         </th>
    // //     </tr>

    // //     <tr class="image-frame">
    // //         <th >
    //         <img class="game-img" src="${game.img}">
    //         </th>
    //     </tr>

    //     <tr class="tag-box">
    //         <th 
    //         class="tag-data" scope="col">Type: ${game.type}
    //         </th>
    //      </tr class="tag-box">
            
    //      <tr class="tag-box">
    //         <th 
    //         class="tag-data" scope="col">Rating: ${game.rating}
    //         </th>
    //      </tr>

    //     <tr class="tag-box">
    //         <th 
    //         class="game-btn"> 
    //             <button data-btn-save class="btn-class" type="button" onclick="saveGame('${game._id}', '${game.gameName}', '${game.type}', '${game.rating}', '${game.img}')"
    //              >Save to favorit
    //             </button>
    //         </th>
    //       </tr>
    // </thead>
    // </div>
    //    `





    // <table class="table">
     {/* <div id="game-table"> */}
      {/* <tbody> */}
    {/* <tr> */}
      {/* <th scope="row"> */}
      {/* <img class="game-img" src="${game.img}"> */}
      {/* </th> */}
    {/* </tr> */}
    {/* <tr> */}
      {/* <th scope="row">${game.gameName}</th> */}
    {/* </tr> */}
    {/* <tr> */}
      {/* <th scope="row">${game.type}</th> */}
    {/* </tr> */}
    {/* <tr> */}
      {/* <th scope="row">${game.rating}</th> */}
    {/* </tr> */}
    {/* </div> */}
    {/* </table> */}