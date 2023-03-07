
//console.log("Hola Mundo!");
//let numero1=7;
//let numero2=10;
//resultado=numero1+numero2;
//console.log("El resultado es:"+resultado);

/**document.getElementById("boton").onclick= function () {
    console.log("Capturamos el evento click");
    document.getElementById("demo").innerHTML="Estamos probando nuestro primer evento en JS";
};

document.addEventListener('click', function () {
    console.log("Hola mundo! desde Event listener");
    document.getElementById("demo").innerHTML="Estamos probando nuestro primer evento en JS";
});
*/
document.getElementById("boton").addEventListener('click', function() {
    console.log("Hola mundo! desde Event listener");
    document.getElementById("demo").innerHTML="Estamos probando nuestro primer evento en JS";
});

document.getElementById("boton_color").addEventListener('click', function() {
    document.body.style.backgroundColor ='#FF0000';
    document.getElementById("demo").innerHTML="Estamos probando nuestro segundo evento en JS";
});

document.getElementById("boton_default").addEventListener('click', function() {
    document.body.style.backgroundColor ='blue';
    document.getElementById("demo").innerHTML="Estamos probando nuestro tercer evento en JS";
});

