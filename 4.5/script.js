function Calculator() {
    this.num1 = +prompt('Введите первое значение: ')
    this.num2 = +prompt('Введите второе значение: ')

    this.sum = function () {
        alert('Сумма = ' + (this.num1 + this.num2))
    }

    this.mul = function () {
        alert('Умножение = ' + this.num1 * this.num2)
    }
}

//let calc = new Calculator()

// calc.sum()
// calc.mul()

function Accumulator (startingValue) {
    this.start = +startingValue

    this.read = function () {
        let num = +prompt('Введите число')
        this.start += num
    }
}

let accum = new Accumulator(2)

//accum.read()
//accum.read()

//alert(accum.start)