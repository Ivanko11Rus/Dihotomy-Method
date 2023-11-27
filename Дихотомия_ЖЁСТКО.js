'use strict';

let min_or_max = Number(prompt('Введите 1 чтобы найти MIN, 0 чтобы найти MAX', 1))

////степень Math.pow(x,n), корень Math.sqrt(x), Math.PI - Пи, Math.E - эпсилон, Math.log() - натуральный логарифм и Math.log(x)/Math.log(y) для x по основанию y
let a = Number(prompt('Введите левую границу интервала', 0))
let b = Number(prompt('Введите правую границу интервала', 1))
let c
if (b < a) alert('Ввади нармальна, я ни магу корректно работать в таких условиях!!!')

function FUNC(x) {
    return Math.pow(x,2) //функция
}

let epsilon = 0.01
let znach
if (min_or_max === 1) {
    while (a - b > epsilon) {
        c = (a+b)/2
        if (FUNC(c-epsilon)<FUNC(c+epsilon)) {
            b = c

        }
        else {a = c}
    }
    znach = (FUNC(a)+FUNC(b))/2
    alert(`Значение минимума равно ${znach}, находится в интервале [${a};${b}]`)
}

if (min_or_max === 0) {
    while (a - b > epsilon) {
        c = (a+b)/2
        if (FUNC(c-epsilon)<FUNC(c+epsilon)) {
            a = c

        }
        else {b = c}
    }
    alert(`Значение максимума равно ${znach}, находится в интервале [${a};${b}]`)
}


    

