/*2- Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. 
A partir de la cadena que se le pasa, la función determina si esa cadena está formada 
sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.
 */


function texto() {
    let cadena = prompt('Ingrese una frase');
    if (cadena === cadena.toUpperCase()) {
      document.write('La cadena está formada solo por mayusculas');
    } else if (cadena === cadena.toLowerCase()) {
      document.write('La cadena está formada solo por minusculas');
    } else {
      document.write('La cadena está formada por una mezcla de mayúsculas y minúsculas');
    }
  }

texto();