function calcularMediaAritmetica(lista) {
    // let sumaLista = 0;
    // for (let i = 0; i < lista.length; i++) {
    //   sumaLista = sumaLista + lista[i];
    // }
  
    const sumaLista = lista.reduce(
      function (valorAcumulado = 0, nuevoElemento) {
        console.log(`Valor Acumulado=${valorAcumulado} Nuevo Elemento=${nuevoElemento}`);

        return valorAcumulado + nuevoElemento;
      }
    );
  
    const promedioLista = sumaLista / lista.length;
  
    return promedioLista;
  }