//asincronia dada por el entorno -> timer 
//asincronia dada por el entorno -> I/O
let second = 2;

setTimeout(() => {
  console.log(`ya pasaron ${second} segundos`); 
}, second * 1000);

console.log('Esto se ejecuta al momento');