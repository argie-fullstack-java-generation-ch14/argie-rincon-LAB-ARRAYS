// llenar un array vacío con los números del 1 al 20, en orden.

const arr = []

for (let i = 0; i < 20; i++) {
    const ele = i + 1;
    arr.push(ele);
}

arr.forEach(ele => console.log(ele))