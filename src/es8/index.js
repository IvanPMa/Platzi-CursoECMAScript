// Object entries - Devolver la key y los valores de una matriz
const data = {
    frontend: 'Oscar',
    backend: 'Isabel',
    design: 'Ana'
};
const entries = Object.entries(data);
console.log(entries);
// Saber cuantos elementos tiene un objetos (after entries), permite hacer una validacion segun sea el caso
console.log(entries.length);

// Object values - devuelve los valores de un objeto a un arreglo
const data = {
    frontend: 'Oscar',
    backend: 'Isabel',
    design: 'Ana'   
}

const values = Object.values(data);
console.log(values);
console.log(values.length);

//Padding -  (nos podria servir para)Presentar una structura de elementos visualmente(menu)
const string = 'hello';
console.log(string.padStart(7,'hi'));
console.log(string.padEnd(12,' ------')); 
console.log('food'.padEnd(12,'  ------'))