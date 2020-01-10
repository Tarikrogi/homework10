//1-2.
let group = [{
        name: "Ihor",
        lastName: "Tarasov",
        age: '24',
        notebook: true,
    },
    {
        name: "Ivan",
        lastName: "Pavlov",
        age: '30',
        notebook: false,
    },
    {
        name: "Petr",
        lastName: "Voevodin",
        age: '41',
        notebook: true,
    }
]

function a() {
    for (el in group) {
        console.log(JSON.stringify(group[el]))
    }
}

function b() {
    let newUser = {
        name: "Sergei",
        lastName: "Petrov",
        age: '18',
        notebook: true,
    }
    return group.push(newUser)
}

//3.

let str = 'Вчbvnера 789 был home work наiuyстоtящий + празrorднgfdик';
str = str.split('')

function toDelete() {
    for (el in str) {
        if (str[el].charCodeAt(0) > 1103 || str[el].charCodeAt(0) < 1040) {
            delete str[el]
        }
    }
    console.log(str.join(''))
}
//4.
let arr = ['a', 'b', 'c', 'd', 'e', 'f']
let i = 0;
while (i < arr.length) {
    console.log(arr[i]);
    i++;
}
//5.

let names = ['Ihor', 'Ivan', 'Petro']
let lastNames = ['Tarasov', 'Pupkin', 'Ivanov']
let newArr = []

for (let i = 0; i < Math.max(names.length, lastNames.length); i++) {
    newArr.push(names[i] + ` ${lastNames[i]}`)
}
console.log(newArr)