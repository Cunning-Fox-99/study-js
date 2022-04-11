let user = {}
user.fistName = "John"
user.lastName = "Smith"
user.fistName = "Pete"
delete user.fistName

let schedule = {};

alert( isEmpty(schedule) )
schedule["8:30"] = "get up"
alert( isEmpty(schedule) )

function isEmpty(obj) {
    for (let key in obj) {
        return false
    }
    return true
}

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

let sum = 0
for (let key in salaries) {
    sum += salaries[key]
}

alert(sum)


let menu = {
    width: 200,
    height: 300,
    title: "My menu"
}

multiplyNumeric(menu)


menu = {
    width: 400,
    height: 600,
    title: "My menu"
}

function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] == 'number') {
            obj[key] *= 2
        }
    }
}