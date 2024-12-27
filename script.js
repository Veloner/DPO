// Проверка имени пользователя
function checkFirstname(input) {
    var firstname = input.value.trim();
    var regex = /^[а-яА-Яa-zA-Z\s]{2,15}$/;

    if (!regex.test(firstname)) {
        alert("Введите имя длиной от 2 до 15 символов, без спецсимволов");
        return false;
    }
    return true;
}

// Проверка E-mail
function checkEmail(input) {
    var email = input.value.trim();
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regex.test(email)) {
        alert("Введите корректный E-mail");
        return false;
    }
    return true;
}

// Проверка пароля
function checkPassword(input) {
    var password = input.value.trim();
    if (password.length < 6) {
        alert("Пароль должен быть длиной не менее 6 символов");
        return false;
    }
    return true;
}

// Проверка телефона
function checkPhone(input) {
    var phone = input.value.trim();
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

    var form = event.target; // Текущая форма
    var isValid = true;

    // Перебираем все элементы формы
    form.querySelectorAll("input").forEach(input => {
        switch (input.id) {
            case "register-firstname":
            case "order-name":
                isValid = checkFirstname(input) && isValid;
                break;
            case "register-email":
            case "order-email":
                isValid = checkEmail(input) && isValid;
                break;
            case "register-password":
                isValid = checkPassword(input) && isValid;
                break;
            case "order-phone":
                isValid = checkPhone(input) && isValid;
                break;
        }
    });

    if (isValid) {
        alert("Данные успешно отправлены!");
        form.submit(); // Отправить форму, если всё корректно
    } else {
        alert("Пожалуйста, исправьте ошибки перед отправкой формы.");
    }
}

// Привязка обработчика ко всем формам
document.querySelectorAll("form").forEach(form => {
    form.addEventListener("submit", validateForm);
});





