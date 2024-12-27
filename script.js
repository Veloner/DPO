// Проверка имени пользователя
function checkFirstname() {
    var firstname = document.getElementById("register-firstname").value.trim();
    var regex = /^[а-яА-Яa-zA-Z\s]{2,15}$/;

    if (!regex.test(firstname)) {
        alert("Введите имя длиной от 2 до 15 символов, без спецсимволов");
        return false;
    }
    return true;
}

// Проверка E-mail
function checkEmail() {
    var email = document.getElementById("register-email").value.trim();
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regex.test(email)) {
        alert("Введите корректный E-mail");
        return false;
    }
    return true;
}

// Проверка пароля
function checkPassword() {
    var password = document.getElementById("register-password").value.trim();
    if (password.length < 6) {
        alert("Пароль должен быть длиной не менее 6 символов");
        return false;
    }
    return true;
}

// Проверка телефона
function checkPhone() {
    var phone = document.getElementById("order-phone").value.trim();
    var regex = /^\+?\d{10,15}$/;

    if (!regex.test(phone)) {
        alert("Введите телефон в международном формате, например: +71234567890");
        return false;
    }
    return true;
}

// Валидация формы
function validateForm(event) {
    event.preventDefault(); // Останавливаем стандартное поведение формы

    // Запуск проверок
    var isFirstnameValid = checkFirstname();
    var isEmailValid = checkEmail();
    var isPasswordValid = checkPassword();
    var isPhoneValid = checkPhone();

    // Если все проверки прошли успешно
    if (isFirstnameValid && isEmailValid && isPasswordValid && isPhoneValid) {
        alert("Данные успешно отправлены!");
        event.target.submit(); // Отправить форму, если всё корректно
    } else {
        alert("Пожалуйста, исправьте ошибки перед отправкой формы.");
    }
}

// Привязка обработчика ко всем формам
document.querySelectorAll("form").forEach(form => {
    form.addEventListener("submit", validateForm);
});





