/*
    На вход подаётся массив произвольный массив чисел, напишите функцию,
    которая отсортирует нечётные числа, а чётные оставит на своих местах.
*/

let arr = [2, 9, 5, 7, 4, 3, 8, 1, 2, 4]
sortTask(arr);
console.log("Testing => ", arr)

function sortTask(arr) {
    let odd = []

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            odd.push(arr[i]);
        }
    }

    arr.map((i, index) => {
        i % 2 !== 0 ? arr[index] = odd.shift() : null
    })
}