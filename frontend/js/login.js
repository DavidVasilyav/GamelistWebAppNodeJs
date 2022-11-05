const loginForm = document.querySelector('[data-login]');
const userNameFromInput = document.querySelector('[data-login-username]');
const passwordFromInput = document.querySelector('[data-login-password]');
const messageFromLoginForm = document.querySelector('[data-form-message]');

connected();

loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const reqBody = {
        userName: userNameFromInput.value,
        password: passwordFromInput.value, 
    };
    const res = await fetch("http://localhost:4545/user/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(reqBody),
    });

    const data = await res.json()
    console.log(data);
    if (data.error) {
        messageFromLoginForm.innerHTML = data.error;
        messageFromLoginForm.className = "err-message";
    } else {
        messageFromLoginForm.innerHTML = `wellcome back ${reqBody.userName}`;
        messageFromLoginForm.className = "success-message";
        localStorage.setItem("token", data.token);
        localStorage.setItem("UserId", data.userId);
        localStorage.setItem("userName", data.userName);
        setTimeout( () => {
            return window.open("http://127.0.0.1:5500/frontend/html/home.html", "_parent");

        }, 1000); 
    }
        
});

function connected() {
    if (localStorage.getItem("token")) {
        window.location.href = "/frontend/html/Home.html";
    
    }
}