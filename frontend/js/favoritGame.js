const favContainer = document.querySelector("[data-favorit-container]");
USER_END_POINT = "http://localhost:4545/user/";


function showFavotirt() {
    const bodyId = { id: localStorage.getItem('UserId')}
    fetch(USER_END_POINT + "userFav", {
        method: 'POST',
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(bodyId),
        
        
    })
    .then((res) => res.json())
    .then((user) => renderFavoritGames(user));
}

function deleteGame( _id ) {
        const body = {id : _id}
        console.log(body);
    fetch(USER_END_POINT + `delete/${localStorage.getItem("UserId")} `, {
        method: "DELETE",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(body)
    })
    .then((res) => res.json())
    .then((clg) => console.log(clg));
    location.reload();
    // showFavotirt()
}

function scoreColor(rate) {
    if(rate >= 5) {
        return '#2cb67d'
    } else return 'red'
    
}


function renderFavoritGames(user) {
    favContainer.innerHTML = user.data.game.map(
        (game) => 
        `
        <table class="table"> 
     <tr>
        <th 
        scope="row"><img class="game-img" src="${game.img}">
        </th>
        
        <td id="name-row">
        ${game.name}
        </td>

        <td>
        ${game.type}
        </td>

        <td style="color:${scoreColor(game.rating)}" >
        ${game.rating}
        </td>

        <td 
        class="game-btn"> 
                <button class="" type="button" onclick="deleteGame('${game.id}')"
                >Remove 
                </button>
        </td>
     </tr>
    </table>
            
    </thead>

    `
    ).join(" ")
}
window.addEventListener("DOMContentLoaded", showFavotirt())