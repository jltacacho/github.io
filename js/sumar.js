

document.getElementById('sumar').addEventListener('click', function() {
    let numeroA = document.getElementById('numero1').value;
    console.log('El valor del numeroA es:'+numeroA);
    let numeroB = document.getElementById('numero2').value;
    console.log('El valor del numeroB es:'+numeroB);
    let resultado = sumar(parseInt(numeroA), parseInt(numeroB));
    console.log('El resultado de la suma es:'+resultado);

    document.getElementById('Resultado').innerHTML = resultado;
    document.getElementById('contenedorresultado').style.display = 'block';
});
function sumar(a, b){
    return a+b;
}