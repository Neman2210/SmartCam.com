function openTab(tabName) {
    // Скрыть все формы
    document.querySelectorAll('.auth-form').forEach(form => {
        form.classList.remove('active');
    });

    // Показать выбранную форму
    document.getElementById(tabName).classList.add('active');

    // Обновить активную вкладку
    document.querySelectorAll('.tab-link').forEach(link => {
        link.classList.remove('active');
    });

    document.querySelector(`[onclick="openTab('${tabName}')"]`).classList.add('active');
}

// Объект с переводами
const translations = {
    ru: {
        "login": "Вход",
        "register": "Регистрация",
        "login-title": "Вход",
        "register-title": "Регистрация",
        "email": "Email",
        "password": "Пароль",
        "name": "Имя",
        "confirm-password": "Подтвердите пароль",
        "login-button": "Войти",
        "register-button": "Зарегистрироваться"
    },
    en: {
        "login": "Login",
        "register": "Register",
        "login-title": "Login",
        "register-title": "Register",
        "email": "Email",
        "password": "Password",
        "name": "Name",
        "confirm-password": "Confirm Password",
        "login-button": "Login",
        "register-button": "Register"
    },
    kz: {
        "login": "Кіру",
        "register": "Тіркелу",
        "login-title": "Кіру",
        "register-title": "Тіркелу",
        "email": "Email",
        "password": "Құпия сөз",
        "name": "Аты",
        "confirm-password": "Құпия сөзді растау",
        "login-button": "Кіру",
        "register-button": "Тіркелу"
    }
};

// Функция для смены языка
function changeLanguage(lang) {
    const elements = document.querySelectorAll("[data-lang]");
    elements.forEach(element => {
        const key = element.getAttribute("data-lang");
        if (translations[lang] && translations[lang][key]) {
            if (element.tagName === "INPUT") {
                element.placeholder = translations[lang][key]; // Для input обновляем placeholder
            } else {
                element.textContent = translations[lang][key]; // Для других элементов обновляем текст
            }
        }
    });
}

// Обработчик изменения языка
document.getElementById("language-select").addEventListener("change", function() {
    const selectedLang = this.value;
    changeLanguage(selectedLang);
});

// Установим язык по умолчанию (русский)
changeLanguage("ru");