
/* Comentário em Bloco */

// Variáveis
// var nome = 'Renato Montanari';

// console.log(nome);

// var car = {
//     'nome': 'L200'
// }

// console.log(car.nome);

// var nome = 'Horácio Nunes';
// var idade = '23';

// console.log('Nome= ' + nome + ' idade= ' + idade + ' tem uma caro ' + car.nome);

/* Operadores Aritméticos */

// var n1 = 200;
// var n2 = 100;

// console.log(n1 + n2 + 3);
// console.log(n1 - n2 + 3);
// console.log(n1 * n2);
// console.log(n1 / n2);
// console.log(2 ** 2);
// console.log(4 - 3 + 2);
// console.log((4 - 3 + 2) * 2);
// console.log(((4 - 2 + 2) / 2 + 2) * 3);

// // Incremento
// console.log(n1++);
// console.log(n1);
// console.log(++n1);
// console.log(n1--);
// console.log(n1);

/* Operadores Lógicos */

// var number = 12;

// console.log(typeof number);

// console.log(typeof number == 'number');
// console.log(typeof number === 'number');

/* Condicionais e (ternaria) */


// var numero = 12;
// var text = '';

// if (numero >= 20){
//     text = 'Menor';
// } else {
//     text = 'Maior';
// }
// console.log(text);

// var numero = 12;
// var text = (numero >= 20) ? 'é maior' : 'Menor';

// console.log(text);


/* Swith */

// var numero = 4

// switch (numero){
//     case 1:
//         result = 'Um';
//         break;
//     case 2:
//         result = 'Dois';
//         break;
//     case 3:
//         result = 'Tres';
//         break;
//     case 4:
//         result = 'Quatro';
//         break;
//     default:
//         result = 'Nenhum resultado';
//         break;    
// }
// console.log(result);

/* Funções */

// function showLog(){
//     console.log('************************');
//     console.log('********Renato *********');
//     console.log('************************');
// }

// showLog();

// var n1 = 2;
// var n2 = 4;

// function soma(num1, num2){
//     var result = num1 + num2;
//     return result;
// }
// console.log(soma(n1, n2));

/* Arrays */

// var carros = ['gol','corsa','uno','fiesta'];

// console.log(carros.length);
// console.log(carros[1]);

// var carros = new Array('gol','corsa','uno','fiesta');
// console.log(carros[1]);

//var carros = new Array('gol','corsa','uno','fiesta');
// adiciona um item no final do array
//carros.push('L200');
//console.log(carros);
// adiciona um item ao inicio do array
//carros.unshift('Corolla');
//console.log(carros);
// remove o ultimo item
//carros.pop();
//console.log(carros);
// remove o primeiro item
// carros.shift();
// console.log(carros);

//Join
// var carros = new Array('gol','corsa','uno','fiesta');
// console.log(carros.join(' - '));

//Reverse
// var carros = new Array('gol','corsa','uno','fiesta');
// console.log(carros.reverse().join(' - '));

//Sort
//var carros = new Array('3','4','2','1');
//console.log(carros.sort());

// console.log(carros.sort(function(val1, val2){
//     return val1 > val2;
// }));

// var carros = new Array('gol','corsa','uno','fiesta');

// console.log(carros.indexOf('gol'));


/* Laços */

// for (var i = 0; i <= 10; i++){
//     console.log(i);
// }

// var i = 1;
// while(i <= 10){
//     console.log(i);
//     i++;
// }

// var carros = new Array('gol','corsa','uno','fiesta');

// carros.forEach(function(item, i, array){
//     console.log(item);
// });


/* Armazenamento */

localStorage.setItem('nome', 'Renato Montanaro');

var theme = localStorage.getItem('theme');
console.log(theme);