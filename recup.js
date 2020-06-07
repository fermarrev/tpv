console.log("TPV HOSTELERIA");

/*Para hacerlo sencillo producto y precio debe estar ordenado.Es decir,
en la posición 0 de "precio" debe corresponder con la posición 0 de producto
habiendo así una correspondendia entre precio y producto.
Esto se ha hecho así por facilitar el código
*/

// --------INICIALIZAMOS VARIABLES DE LA APLICACION -------------/
var precio= [1.75,1.95,2.25,1.50,1.20,1.10,1.10,1.55,7.25,5.65,3.75,6.35]
var productos = ["cerveza","vino","martini","refresco","zumo","cafe","te","agua","pizza","hamburguesa","sandwich","bocadillo"];
var total=0;

//  ------------ CREAMOS LOS EVENTOS -----------------/
var evento = document.getElementById("cerveza").addEventListener("click",createElement);
var evento = document.getElementById("vino").addEventListener("click",createElement);
var evento = document.getElementById("martini").addEventListener("click",createElement);
var evento = document.getElementById("refresco").addEventListener("click",createElement);
var evento = document.getElementById("zumo").addEventListener("click",createElement);
var evento = document.getElementById("cafe").addEventListener("click",createElement);
var evento = document.getElementById("te").addEventListener("click",createElement);
var evento = document.getElementById("agua").addEventListener("click",createElement);
var evento = document.getElementById("pizza").addEventListener("click",createElement);
var evento = document.getElementById("hamburguesa").addEventListener("click",createElement);
var evento = document.getElementById("sandwich").addEventListener("click",createElement);
var evento = document.getElementById("bocadillo").addEventListener("click",createElement);

// ----------- EVENTO PARA BORRAR EL CONTENIDO DE LA CUENTA ----------------//
var borrar = document.getElementById("borrar").addEventListener("click",deletedElement);

// ----------- FUNCIÓN CREAR ELEMENTOS QUE MUESTRA UNA LISTA DE PRODUCTOS-------//
function createElement (){
producto=event.path[1].id;  // Guarda en la variable producto el nombre de quien produjo el evento
var index = productos.indexOf(producto); // Calcula la posición del array que nos servirá para sacar el precio que el corresponde a cada producto

// ---- CREA ELEMENTO DE LA LISTA-------------//
var node = document.createElement("li");
// ---- CREA TEXTO QUE DEBE APARECER EN LA LISTA ---------/
var textnode = document.createTextNode("1 "+producto+ ": " +precio[index] +"€" );
node.appendChild(textnode); //añade el texto creado a la lista

node.setAttribute("class","elementCuenta"); //Añade un atributo clase para mostrar

document.getElementById("cuenta").appendChild(node); //Añade un hijo (li con el texto) a la lista "ul"

actualizaTotal(precio[index]); // Llamada a la función para actualizar precio Total
}

// -------- FUNCION ACTUALIZAR EL PRECIO TOTAL  --------------//
function actualizaTotal (precioProducto){
    total= parseFloat(total)+parseFloat(precioProducto);
    total = total.toFixed(2);
    document.getElementById("Total").innerHTML = total+"€";
}

// -------- FUNCION PARA ELIMINAR TODOS LOS REGISTROS DE LA LISTA -----------//
function deletedElement(){
 var list = document.getElementById("cuenta");
 while (list.hasChildNodes()) {  
 list.removeChild(list.firstChild);

 }
 total=0;
 document.getElementById("Total").innerHTML = total+"€";
}
