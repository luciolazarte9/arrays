/*Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

Mostrar la longitud del arreglo.
Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
Añade en última posición la ciudad de París.
Escribe por pantalla el elemento que ocupa la segunda posición.
Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.
 */

let ciudades = [];

while (true) {
  let ciudad = prompt('Ingrese una ciudad o presione cancelar para finalizar:');
  if (ciudad === null) {
    break;
  }
  ciudades.push(ciudad);
}

document.write(`<p>Longitud del arreglo: ${ciudades.length}</p>`);
document.write(`<p>Primera posicion: ${ciudades[0]}</p>`);
document.write(`<p>Tercera posicion: ${ciudades[2]}</p>`);
document.write(`<p>Última posición: ${ciudades[ciudades.length-1]}</p>`);

ciudades.push('París');
document.write(`<p>Arreglo actualizado: ${ciudades}</p>`);

document.write(`<p>Elemento en la segunda posicion: ${ciudades[1]}</p>`);

ciudades[1] = 'Barcelona';
document.write(`<p>Cuidad agregada: ${ciudades}</p>`);

