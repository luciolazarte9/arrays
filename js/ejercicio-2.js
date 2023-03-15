
let ciudades = [];

while (true) {
  var ciudad = prompt('Ingresa una ciudad (o presiona Cancelar para terminar) ');
  if (ciudad === null) {
    break;
  }
  ciudades.push(ciudad);
}


document.write(ciudades);

// Mostramos la longitud del arreglo
document.write("Longitud del arreglo: " + ciudades.length);

document.write("Ciudades en las posiciones primera, tercera y última:<br>");
document.write(ciudades[0] + "<br>");
document.write(ciudades[2] + "<br>");
document.write(ciudades[ciudades.length-1] + "<br>");


ciudades.push("París");
document.write(ciudades);


console.log("El elemento en la segunda posición es: " + ciudades[1]);


ciudades.splice(1, 1, "Barcelona");
document.write(ciudades);
