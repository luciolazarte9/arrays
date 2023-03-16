function tabla(numero) {
    for (let i = 1; i <= 10; i++) {
      document.write(`${numero} x ${i} = ${numero * i} <br>`);
    }
  }
  
  let numero = parseInt(prompt('Ingresa un numero para mostrar su tabla de multiplicar:'));
  
  tabla(numero);
  