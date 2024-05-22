// Paso 1: Define un array vacío
var numerosAleatorios = [];

// Paso 2: Genera los números aleatorios
for (var i = 0; i < 10; i++) {
    var numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    numerosAleatorios.push(numeroAleatorio); // Añade el número aleatorio al array
}

// Ahora el array numerosAleatorios contiene 10 números aleatorios entre 1 y 100
console.log(numerosAleatorios);

// Mostrar numeros en el HTML
var contenedor = document.getElementById('contenedor');
contenedor.textContent = "Los numeros son: " + numerosAleatorios;

// Suma
var suma = numerosAleatorios.reduce((total, actual) => total + actual, 0);
var resultadosuma = document.getElementById("resultado");
resultadosuma.textContent = "El resultado de la suma es: " + suma;

// Promedio
var promedio = suma / numerosAleatorios.length;
var resultadopromedio = document.getElementById("promedio");
resultadopromedio.textContent = "El promedio es: " + promedio;

// Número máximo
var maximo = Math.max(...numerosAleatorios);
var resultadoMaximo = document.getElementById("maximo");
resultadoMaximo.textContent = "El número máximo es: " + maximo;

// Numero minimo
var minimo = Math.min(...numerosAleatorios);
var resultadoMinimo = document.getElementById("minimo");
resultadoMinimo.textContent = "El numero minimo es: " + minimo;

// Array con el primer y el ultimo elemento borrado
numerosAleatorios.shift();
numerosAleatorios.pop();

var nuevoArray = document.getElementById("arrayModificada");
nuevoArray.textContent = "si le borramos el primer y el ultimo elemento al array se veria de esta manera: " + numerosAleatorios;

// Agregar un nuevo número aleatorio al final del array
var nuevoNumeroAleatorio = Math.floor(Math.random() * 100) + 1;
numerosAleatorios.push(nuevoNumeroAleatorio);

// Mostrar el array actualizado en el HTML
var arrayNuevoElemento = document.getElementById("arrayNuevoElemento");
arrayNuevoElemento.textContent = "Y así se vería si ahora le agregamos al final un nuevo elemento aleatorio: " + numerosAleatorios;

// Ordenar el arreglo numéricamente
numerosAleatorios.sort(function(a, b) {
    return a - b;
  });
  
  // Mostrar el arreglo ordenado en el HTML
  var arrayOrdenado = document.getElementById("arrayOrdenado");
  arrayOrdenado.textContent = "El array ordenado es: " + numerosAleatorios;
  
 // invertir el orden del arreglo. Uso el mismo metodo "sort" pero lo ordenare al reves, en este caso (b-a)
 
 numerosAleatorios.sort(function(b, a){
    return a - b;
 }) 

 var arrayInvertido = document.getElementById("arrayInvertido");
 arrayInvertido.textContent = "El array con su orden invertido es: " + numerosAleatorios;

 // Mostrar la posicion de cada elemento del arreglo

 for (var i = 0; i < numerosAleatorios.length; i++){
    var elemento =document.createElement("p");
    elemento.textContent = "Elemento en la posicion " + i + "; " + numerosAleatorios[i];
    posicion.appendChild(elemento);
 }