let task = prompt('Какое "официальное" название JavaScript? ')

if (task === 'ECMAScript') {
    alert('Верно!')
} else alert('Не знаете? ECMAScript!')


let currentNumber = prompt('Введите число: ')

if (currentNumber > 0) {
    alert(1)
} else if (currentNumber < 0) {
    alert(-1)
} else alert(0)

let result = (a + b < 4) ? 'Мало' : 'Много'

let login = prompt('Кто вы? ')

let message = (login === 'Сотрудник') ? 'Привет!' :
    (login === 'Директор') ? 'Здравствуйте' :
        (login === '') ? 'Нет логина' : ''