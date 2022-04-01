function checkAge(age) {
   return (age > 18 ? true : confirm('А родители разрешили?'))
}

checkAge(19)


function minNumber (a, b) {
    return console.log((a >= b ? b : a))
}


minNumber(2, 5)
minNumber(3, -1)
minNumber(1, 1)


function powNumbers (x, n) {
    if (n < 1) {
        return console.log(`Степень ${n} не поддерживается`)
    }
    return console.log(x ** n)
}

powNumbers(3, 2)
powNumbers(3, 3)
powNumbers(1, 100)

let x = +prompt('X: ')
let n = +prompt('N: ')


powNumbers(x, n)


// Callback

function ask(question, yes, no) {
    if (confirm(question)) yes() // Вызов если да
    else no(); // вызов если нет
}

function showOk() {
    alert( "Вы согласны." );
}

function showCancel() {
    alert( "Вы отменили выполнение." );
}

// использование: функции showOk, showCancel передаются в качестве аргументов ask
ask("Вы согласны?", showOk, showCancel);
