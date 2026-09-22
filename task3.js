// insertar el número faltante en el array dado, en la posición correcta.

const arr = [1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12]

// Verificar el numero que falta
let totalExcpeted = 0; // 78
let currentTotal = 0; // ??
let missingNum = 0;

// sumar el total de los que deberia haber en la lista de numeros complete
for (let i = 0; i < arr[arr.length - 1]; i++) {
  const ele = i + 1;
  totalExcpeted += ele;
}
// console.log({ totalExcpeted });

// sumar el total de lo que hay en la lista actual
for (let i = 0; i < arr.length; i++) {
  const ele = arr[i];
  currentTotal += ele;
}
// console.log({ currentTotal });

// restar el total de lo que deberia hacer menos el total de lo que hay
missingNum = totalExcpeted - currentTotal;
// console.log({ missingNum });

// Luego de identificar el numero que falta necesito ubicar en que posicion del array actual iria
// Yo sé que el número faltante es 8, y sé en qué posición va, pero necesito decirle a la compu, que es cieguita, que ella misma lo ubique y lo inserte.
// La estrategia lógica para la compu es determinar cuándo un elemento del array es más grande (mayor) que el número que quiero insertar.

for (let i = 0; i < arr.length; i++) {
  const current = arr[i];
  const next = arr[i + 1];

  if (missingNum > current && missingNum < next) {
    arr.splice(i + 1, 0, missingNum)
    break;
  }
}

arr.forEach(element => console.log(element))