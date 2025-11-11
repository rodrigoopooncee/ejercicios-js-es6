/*7.1 Dado el siguiente array, haz una suma de todos las notas de los examenes de 
los alumnos usando la función .reduce().

const exams = [
    {name: 'Yuyu Cabeza Crack', score: 5}, 
    {name: 'Maria Aranda Jimenez', score: 1}, 
    {name: 'Cristóbal Martínez Lorenzo', score: 6}, 
    {name: 'Mercedez Regrera Brito', score: 7},
    {name: 'Pamela Anderson', score: 3},
    {name: 'Enrique Perez Lijó', score: 6},
    {name: 'Pedro Benitez Pacheco', score: 8},
    {name: 'Ayumi Hamasaki', score: 4},
    {name: 'Robert Kiyosaki', score: 2},
    {name: 'Keanu Reeves', score: 10}
];

7.2 Dado el mismo array, haz una suma de todos las notas de los examenes de los 
alumnos que esten aprobados usando la función .reduce().

7.3 Dado el mismo array, haz la media de las notas de todos los examenes .reduce().*/


//7.1
const exams = [
    {name: 'Yuyu Cabeza Crack', score: 5}, 
    {name: 'Maria Aranda Jimenez', score: 1}, 
    {name: 'Cristóbal Martínez Lorenzo', score: 6}, 
    {name: 'Mercedez Regrera Brito', score: 7},
    {name: 'Pamela Anderson', score: 3},
    {name: 'Enrique Perez Lijó', score: 6},
    {name: 'Pedro Benitez Pacheco', score: 8},
    {name: 'Ayumi Hamasaki', score: 4},
    {name: 'Robert Kiyosaki', score: 2},
    {name: 'Keanu Reeves', score: 10}
];

const suma = exams.reduce((acumulador, valor_actual) => acumulador + valor_actual.score, 0);

console.log(suma);


//7.2
const suma_aprobados = exams.reduce((acumulador, valor_actual) => {
  if (valor_actual.score >= 5) {
      return acumulador + valor_actual.score
    }
    return acumulador
  }, 0);

console.log('Suma de las notas aprobadas:', suma_aprobados);


//7.3
const media = exams.reduce((acumulador, valor_actual, indice, array) => {
    acumulador += valor_actual.score;
    if (indice === array.length - 1) {
        return acumulador / array.length;
    }
    return acumulador;
}, 0);
console.log('Media de las notas:', media);
