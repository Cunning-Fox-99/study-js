// alert( null || 2 || undefined ) // 2
//
// alert( alert(1) || 2 || alert(3) ); // 1 -> 2
//
// alert( 1 && null && 2 ); // null
//
// alert( alert(1) && alert(2) );  // 1 -> undefined
//
// alert( null || 2 && 3 || 4 ); // 3


// let age = prompt('Введите ваш возраст: ')
//
// if (age < 14 || age > 90) {
//     alert('123')
// }
//
// if (!(age >= 14 && age <= 90)) {
//     console.log(132)
// }
//
// if (-1 || 0) alert( 'first' ); // -1
// if (-1 && 0) alert( 'second' ); // false
// if (null || -1 && 1) alert( 'third' ); // -1

let user = prompt('Кто там? ')

if (user === 'Админ') {
    let pass = prompt('Пароль? ')

    if(pass === 'Я Главный') {
        alert('Здравствуйте')
    } else if (pass === null || pass === '') {
        alert('Отменено')
    } else alert('Другое')

} else if (user === null || user === '') {
    alert('Отменено')
} else alert('Я вас не знаю')