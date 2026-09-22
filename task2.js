// invertir el orden del array dado
const arr = [16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

// con reverse
arr.reverse();

// con un for iterando desde el último índice hasta el primero
for (let i = arr.length - 1; i >= 0; i--) {
    const ele = arr[i];
    console.log(ele);
}

arr.forEach(elem => console.log(elem))