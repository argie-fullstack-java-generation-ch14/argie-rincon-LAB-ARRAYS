// eliminar uno de los dos números duplicados en el array dado
const arr = [1, 2, 3, 4, 5, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]

// ventana de vision de la compu
let prev;
let current;

for (let i = 0; i < arr.length; i++) {
    current = arr[i];

    if (current === prev) {
        arr.splice(i, 1)
        break;
    }
    prev = current;
}

arr.forEach(element => console.log(element))