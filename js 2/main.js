// Задача. В переменной min лежит число от 0 до 59. Определите в какую четверть часа попадает это число (в первую, вторую, третью или четвертую).

// let min = 30;

// if (min >= 0 && min <= 14) {
//     console.log('Число попадает в первую четверть часа');
// } else if (min >= 15 && min <= 29) {
//     console.log('Число попадает во вторую четверть часа');
// } else if (min >= 30 && min <= 44) {
//     console.log('Число попадает в третью четверть часа');
// } else if (min >= 45 && min <= 59) {
//     console.log('Число попадает в четвертую четверть часа');
// } else {
//     console.log('Введено некорректное значение');
// }

// Переменная lang может принимать 2 значения: 'ru' 'en'. Если она имеет значение 'ru', то в переменную arr запишем массив дней недели на русском языке, а если имеет значение 'en' – то на английском. Решите задачу через 2 if, через switch-case и через многомерный массив без ифов и switch.
// let lang = 'ru'; // замените это значение на ваш язык
// let arr;

// switch (lang) {
//     case 'ru':
//         arr = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
//         break;
//     case 'en':
//         arr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
//         break;
//     default:
//         arr = 'Некорректный язык';
// }

// console.log(arr);

// let lang = 'ru'; // замените это значение на ваш язык
// let arr = [
//     ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
//     ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
// ];

// console.log(arr[lang === 'ru' ? 0 : 1]);



// Работа с && (и) и || (или)
// let a = 5; // замените это значение на ваше число

// if (a > 0 && a < 5) {
//     console.log('Верно');
// } else {
//     console.log('Неверно');
// }
// a = 5;
// console.log(a); // Неверно

// a = 0;
// console.log(a); // Неверно

// a = -3;
// console.log(a); // Неверно

// a = 2;
// console.log(a); // Верно

// 2

// let a = 5; // замените это значение на ваше число

// if (a === 0 || a === 2) {
//     a += 7;
// } else {
//     a /= 10;
// }

// console.log(a);


// a = 5;
// console.log(a); // 0.5

// a = 0;
// console.log(a); // 7

// a = -3;
// console.log(a); // -0.3

// a = 2;
// console.log(a); // 9

// 3


// let a = 1; 
// let b = 3; 

// if (a <= 1 && b >= 3) {
//     console.log(a + b);
// } else {
//     console.log(a - b);
// }
// a = 1;
// b = 3;
// console.log(a + b); // 4

// a = 0;
// b = 6;
// console.log(a - b); // -6

// a = 3;
// b = 5;
// console.log(a - b); // -2


// 4

// let a = 5;
// let b = 8;

// if (a > 2 && a < 11 || b >= 6 && b < 14) {
//     console.log('Верно');
// } else {
//     console.log('Неверно');
// }

// a = 5;
// b = 8;
// console.log(a + b); // Верно

// a = 0;
// b = 0;
// console.log(a + b); // Неверно

// a = -3;
// b = -3;
// console.log(a + b); // Неверно

// a = 2;
// b = 2;
// console.log(a + b); // Неверно

// Задачи на swilet 
// num = 1;
// let result;

// switch (num) {
//     case 1:
//         result = 'зима';
//         break;
//     case 2:
//         result = 'весна';
//         break;
//     case 3:
//         result = 'лето';
//         break;
//     case 4:
//         result = 'осень';
//         break;
//     default:
//         result = 'Некорректное значение';
// }

// console.log(result);

// num = 1;
// console.log(num); // зима

// num = 2;
// console.log(num); // весна

// num = 3;
// console.log(num); // лето

// num = 4;
// console.log(num); // осеньtch-case

// Задачи

// В переменной day лежит какое-то число из интервала от 1 до 31. Определите в какую декаду месяца попадает это число (в первую, вторую или третью).
// let day = 15; 
// let decade;

// if (day >= 1 && day <= 10) {
//     decade = 'первая декада';
// } else if (day >= 11 && day <= 20) {
//     decade = 'вторая декада';
// } else if (day >= 21 && day <= 31) {
//     decade = 'третья декада';
// } else {
//     decade = 'Некорректное значение';
// }

// console.log(`Число ${day} попадает в ${decade} декаду месяца`);
// day = 1;
// console.log(day);

// day = 10;
// console.log(day);

// day = 20;
// console.log(day);

// day = 31;
// console.log(day);
// В переменной month лежит какое-то число из интервала от 1 до 12. Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).
// let month = 3; 
// let season;

// if (month === 12 || month >= 1 && month <= 2) {
//     season = 'зима';
// } else if (month >= 3 && month <= 5) {
//     season = 'весна';
// } else if (month >= 6 && month <= 8) {
//     season = 'лето';
// } else if (month >= 9 && month <= 11) {
//     season = 'осень';
// } else {
//     season = 'Некорректное значение';
// }

// console.log(`Месяц ${month} попадает в ${season} пору года`);
// month = 1;
// console.log(month); // зима

// month = 3;
// console.log(month); // весна

// month = 6;
// console.log(month); // лето

// month = 9;
// console.log(month); // осень

// month = 12;
// console.log(month); // зима
// Дана строка, состоящая из символов, например, 'abcde'. Проверьте, что первым символом этой строки является буква 'a'. Если это так - выведите 'да', в противном случае выведите 'нет'.
// let str = 'abcde';

// if (str.charAt(0) === 'a') {
//     console.log('да');
// } else {
//     console.log('нет');
// }
// str = 'abcde';
// console.log(str); // нет

// str = 'abc';
// console.log(str); // да

// str = 'a';
// console.log(str); // да

// str = 'b';
// console.log(str); // нет
// Дана строка с цифрами, например, '12345'. Проверьте, что первым символом этой строки является цифра 1, 2 или 3. Если это так - выведите 'да', в противном случае выведите 'нет'.
// let str = '12345'; 

// if (str.charAt(0) === '1' || str.charAt(0) === '2' || str.charAt(0) === '3') {
//     console.log('да');
// } else {
//     console.log('нет');
// }
// str = '12345';
// console.log(str); // да

// str = '23456';
// console.log(str); // да

// str = '34567';
// console.log(str); // да

// str = '45678';
// console.log(str); // нет
// Дана строка из 3-х цифр. Найдите сумму этих цифр. То есть сложите как числа первый символ строки, второй и третий.
// let str = '123';
// let sum = Number(str.charAt(0)) + Number(str.charAt(1)) + Number(str.charAt(2));

// console.log(sum);
// str = '123';
// console.log(str); // 6

// str = '456';
// console.log(str); // 15

// str = '789';
// console.log(str); // 24
// Дана строка из 6-ти цифр. Проверьте, что сумма первых трех цифр равняется сумме вторых трех цифр. Если это так - выведите 'да', в противном случае выведите 'нет'.
// let str = '123456';
// let sum1 = Number(str.charAt(0)) + Number(str.charAt(1)) + Number(str.charAt(2));
// let sum2 = Number(str.charAt(3)) + Number(str.charAt(4)) + Number(str.charAt(5));

// if (sum1 === sum2) {
//     console.log('да');
// } else {
//     console.log('нет');
// }
// str = '123456';
// console.log(str); // да

// str = '112233';
// console.log(str); // да

// str = '1234567';
// console.log(str); // нет


























