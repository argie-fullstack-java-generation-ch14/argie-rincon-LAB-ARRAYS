const arr1 = ["hello"]
const arr2 = ["world"]

console.log(arr1.concat(arr2));

// alternativa manual al concat(): copiar ambos arrays con for
const fusionado = [];
for (let i = 0; i < arr1.length; i++) {
    fusionado.push(arr1[i]);
}
for (let i = 0; i < arr2.length; i++) {
    fusionado.push(arr2[i]);
}
console.log(fusionado);
