/*
3- Escribir un script que simule el lanzamiento de dos dados. 
Hacer uso de la función Math.random para obtener números aleatorios
 entre 1 y 6 para cada uno de los lanzamientos de los dados. 
 Sumar el resultado de lanzar dos dados y anotar en un array el número de
  apariciones de dicha suma, repitiendo 50 veces esta operación.
*/

let resultados = Array(11).fill(0);

for (let i = 0; i < 50; i++) {
  let dado1 = Math.floor(Math.random() * 6) + 1;
  let dado2 = Math.floor(Math.random() * 6) + 1;
  let suma = dado1 + dado2;
  resultados[suma - 2]++;
}

for (let i = 0; i < resultados.length; i++) {
  let frecuencia = resultados[i];
  let suma = i + 2;
  document.write(`<p>La suma ${suma} aparecio ${frecuencia} veces.<p>`);
}
