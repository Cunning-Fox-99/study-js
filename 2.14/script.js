let browser = 'Chrome'

if (browser === 'Edge') {
    alert('Edge!')
} else if (browser === 'Chrome' || browser === 'Firefox' || browser === 'Safari' || browser === 'Opera') {
    alert('Okay, we support these browsers too!')
} else {
    'We hope that this page looks ok!'
}


let number = +prompt('Введите число между 0 и 3: ')

switch (number) {
    case 0:
        alert('Вы ввели 0.')
        break
    case 1:
        alert('Вы ввели число 1')
        break
    case 2:
    case 3:
        alert('Вы ввели число 2, а может 3')
        break
    default:
        alert('Не знаю такое число')
        break
}