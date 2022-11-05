const userStatus = document.querySelector('[data-user-status]');
console.log(userStatus);

if (!localStorage.getItem("token")) {
    window.location.href = "/frontend/html/Login.html";
} else { 
    userStatus.innerHTML = `Wellcome back: <h4>${localStorage.getItem("userName")}</h1>`

};

function scoreColor(rate) {
    if(rate >= 5) {
        return '#2cb67d'
    } else return 'red'
    
}
