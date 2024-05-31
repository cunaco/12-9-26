function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const errorElement = document.getElementById("error");

    if (!name || !email || !message) {
        errorElement.textContent = "Пожалуйста, заполните все поля.";
        return;
    }

    if (!email.includes("@")) {
        errorElement.textContent = "Пожалуйста, введите правильный адрес электронной почты.";
        return;
    }

    errorElement.textContent = "";
    alert("Форма успешно отправлена!");
}
