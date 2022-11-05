const registerForm = document.querySelector('[data-register]');
const registerUserName = document.querySelector('[data-register-username]');
const registerPassword = document.querySelector('[data-register-password]');
const registerEmail = document.querySelector('[data-e-mail]');
const registerFirstName = document.querySelector('[data-firstName]');
const registerLastName = document.querySelector('[data-lastName]');
const registerAge = document.querySelector('[data-age]');
const FormMessage = document.querySelector('[data-form-message]');


registerForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const reqBody = {
        userName: registerUserName.value,
        password: registerPassword.value,
        email: registerEmail.value,
        firstName: registerFirstName.value,
        lastName: registerLastName.value,
        age: registerAge.value,
    };
    

    const res = await fetch("http://localhost:4545/user/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(reqBody),
    });

    const data = await res.json();

    if (data.error) {
        FormMessage.innerHTML = data.error;
        FormMessage.className = "err-message";
        console.log(data.error);
    } else {
        FormMessage.innerHTML = `wellcome ${reqBody.userName}`
        FormMessage.className = "success-message";
    };
});