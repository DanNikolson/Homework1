
const askSomething = (data) => prompt(data);
const askSurname = () => askSomething("Введите вашу фамилию");
const askName = () => askSomething("Введите ваше имя");
const askPatronymic = () => askSomething("Введите ваше отчество");
const askAge = () => Number(askSomething("Введите ваш возраст в годах(четырёхзначное число)"));

const WrongData = () => alert("Ошибка, попробуйте снова");

function UserData() {

    let surname = askSurname();

    while (Validation(surname) === true) {
        WrongData();
        surname = askSurname();
    }
    let name = askName();

    while (Validation(name) === true) {
        WrongData();
        name = askName();
    }
    let patronymic = askPatronymic();

    while (Validation(patronymic) === true) {
        WrongData();
        patronymic = askPatronymic();
    }
    let age = askAge();

    while (ValidationAge(age) === true) {
        WrongData();
        age = askAge();
    }

    let sex = confirm("Ваш пол мужской?");

    if (sex === true) {
        sex = "мужской";
    } else {
        sex = "женский";
    }
    let now = new Date().toLocaleDateString().slice(6);

    let realAge = now - age;

    if (sex === 'мужской' && realAge >= 65) {
        var pension = 'да';
    } else if (sex === 'женский' && (now - age) >= 55) {
        pension = 'да';
    } else {
        pension = 'нет';
    }

    alert(`Ваше ФИО: ${surname},${name},${patronymic}\n
        Ваш возраст в годах: ${age}\n
        Ваш возраст в днях: ${age * 365}\n
        Через 5 лет вам будет: ${realAge + 5}\n
        Ваш пол: ${sex}\n
        Вы на пенсии: ${pension}`);
}


function Validation(data) {
    if (data === "" || data === null || !isNaN(data)) {
        return true;
    }
}
function ValidationAge(data) {
    let n = String(data).length;
    if (isNaN(data) || n != 4) {
        return true;
    }
}

UserData();