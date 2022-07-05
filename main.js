//Задание No1

let count = +prompt('Введите значение:');
let SquareCount = count ** 2;
let CubicCount = count ** 3;
console.log('Значение:' + ' ' + count);
console.log('Квадрат этого значения:' + ' ' + SquareCount);
console.log('Куб этого значения:' + ' ' + CubicCount);

//Задание No2

let ValueDegreesCelsius = +prompt('Введите значение в градусах Цельсия:');
let CelsiusToFahrenheit = (ValueDegreesCelsius * 9/5) + 32;
console.log(ValueDegreesCelsius + '\u00B0C' + ' ' + 'равно' + ' ' + CelsiusToFahrenheit + '\u00B0F');
let ValueDegreesFahrenheit = +prompt('Введите значение в градусах Фарингейта:');
let FahrenheitToCelsius = (ValueDegreesFahrenheit - 32) * 5/9;
console.log(ValueDegreesFahrenheit + '\u00B0F' + ' ' + 'равно' + ' ' + FahrenheitToCelsius + '\u00B0C');














