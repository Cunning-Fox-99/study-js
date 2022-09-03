let calc = {
    num1: 0,
    num2: 0,
    read() {
        this.num1 =  +prompt('Введите первое значение')
        this.num2 =  +prompt('Введите второе значение')
    },
    sum() {
        return alert(this.num1 + this.num2)
    },
    mul() {
        return alert(this.num1 * this.num2)
    }

}

// calc.read()
// calc.sum()
// calc.mul()


let ladder = {
    step: 0,
    up() {
        this.step++
        return this
    },
    down() {
        this.step--
        return this
    },
    showStep() {
        alert( this.step )
        return this
    }
}

// ladder.up().up().down().up().down().showStep()