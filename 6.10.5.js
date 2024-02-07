// Функция для проверки введенного значения на число
function isNumber(value) {
    return !isNaN(parseFloat(value)) && isFinite(value);
  }
  
  // Получение возраста пользователя
  var age = prompt('Введите ваш возраст');
  
  // Проверка на корректность введенного значения
  if (!isNumber(age)) {
    alert('Вы ввели некорректное значение');
  } else {
    // Приведение возраста к числовому типу
    age = Number(age);
  
    var creditAmount = 0;
  
    // Проверка на возраст и определение суммы кредита
    if (age >= 18 && age <= 21) {
      creditAmount = 50000;
    } else if (age >= 22 && age <= 35) {
      creditAmount = 400000;
    } else if (age >= 36 && age <= 65) {
      creditAmount = 1000000;
    }
  
    // Проверка на кратность суммы кредита
    if (creditAmount % 1000 !== 0) {
      creditAmount = Math.floor(creditAmount / 1000) * 1000;
    }
  
    // Вывод результата
    alert('Вы можете получить кредит на сумму: ' + creditAmount);
  }