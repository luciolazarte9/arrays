/*3- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, 
luego crear una función para calcular su perímetro y mostrarlo por pantalla.

La fórmula del perímetro  es p = 2*(a +b)
 */


function calcularPerimetro(a,b){
    let perimetro =2 * (a + b);
    document.write(`El perimetro del rectangulo ingresado es: ${perimetro}`);
}

let ladoA = parseFloat(prompt('Ingresa el valor del lado "A" del rectangulo'));
let ladoB = parseFloat(prompt('Ingresa el valor del lado "B" del rectangulo'));

calcularPerimetro(ladoA, ladoB)
