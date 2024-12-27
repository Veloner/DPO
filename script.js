// Проверка поля имени
function checkFirstname() {
    var firstname = document.getElementById("firstname").value.trim();
    var regex = /^[а-яА-Яa-zA-Z\s]{2,15}$/;

    if (regex.test(firstname)) {
        document.getElementById("firstname_Check").style.color = "green";
        document.getElementById("firstname_Check").innerHTML = "Корректный ввод";
        return true;
    } 
    else {
        document.getElementById("firstname_Check").style.color = "red";
        document.getElementById("firstname_Check").innerHTML = "Введите от 2 до 15 символов";
        return false;
    }
}





// Плавный скролл
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        // Плавный переход
        targetElement.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Проверка поля E-mail
function checkEmail() {
    var email = document.getElementById("e-mail").value.trim();
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (regex.test(email)) {
        document.getElementById("email_Check").style.color = "green";
        document.getElementById("email_Check").innerHTML = "Корректный ввод";
        return true;
    } 
    else {
        document.getElementById("email_Check").style.color = "red";
        document.getElementById("email_Check").innerHTML = "Введите корректный E-mail";
        return false;
    }
}

// Проверка телефона
function checkPhone() {
    var phone = document.getElementById("phone").value.trim();
    var regex = /^\+7\(\d{3}\)-\d{3}-\d{2}-\d{2}$/;

    if (regex.test(phone)) {
        document.getElementById("phone_Check").style.color = "green";
        document.getElementById("phone_Check").innerHTML = "Корректный ввод";
        return true;
    } 
    else {
        document.getElementById("phone_Check").style.color = "red";
        document.getElementById("phone_Check").innerHTML = "Введите телефон в формате +7(xxx)-xxx-xx-xx";
        return false;
    }
}




// Проверка и вывод данных
function validateForm(event) {
    event.preventDefault();

    var isValid =
        checkFirstname() & checkEmail() & checkPhone() & checkDate();

    if (isValid) {
        var firstname = document.getElementById("firstname").value.trim();
        var email = document.getElementById("e-mail").value.trim();
        var phone = document.getElementById("phone").value.trim();
        var date = document.getElementById("date").value.trim();

        alert(
            `Здравствуйте, ${firstname}!\n\n` +
            `Мы получили ваш запрос.\n` +
            `Детали:\n` +
            `Email: ${email}\n` +
            `Телефон: ${phone}\n` +
            `Дата: ${date}\n\n` +
            `Мы свяжемся с вами в ближайшее время!`
        );
    } else {
        alert("Пожалуйста, заполните все поля корректно.");
    }
}

document.getElementById("form__consultation").addEventListener("submit", validateForm);




//обработчики событий для всех элементов h2
const headers = document.querySelectorAll('h2');

headers.forEach((header) => {
    header.addEventListener('click', () => {

        if (header.style.color === 'red') {
            header.style.color = ''; 
        } else {
            header.style.color = 'red'; 
        }
    });
});

    // Обработчик формы
    document.getElementById('consultationForm').addEventListener('submit', function (e) {
        e.preventDefault(); // Отменяем стандартное поведение формы

        // Получаем значения из полей
        const firstname = document.getElementById('firstname').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const date = document.getElementById('date').value;

        // Формируем сообщение
        const message = `
            Данные успешно отправлены:
            Имя: ${firstname}
            E-mail: ${email}
            Телефон: ${phone}
            Дата: ${date}
        `;

        // Выводим сообщение через alert
        alert(message);

    });

    function handleFormSubmit(event) {
        // Предотвращаем стандартное поведение формы
        event.preventDefault();

        // Находим форму, из которой был вызван сабмит
        const form = event.target;

        // Получаем данные из полей формы
        const inputs = form.querySelectorAll('input');
        const formData = Array.from(inputs).map(input => `${input.placeholder}: ${input.value}`).join('\n');

        // Показываем сообщение
        alert(`Данные успешно отправлены:\n\n${formData}`);

        // Очищаем форму после сабмита (опционально)
        form.reset();
    }

