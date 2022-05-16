function soma(x1, x2){
    document.getElementById("caixa1").innerHTML=x1+x2;
 }

function subtrair(x1, x2){
    document.getElementById("caixa2").innerHTML=x1-x2; 
}

function multiplicar(x1, x2){
    document.getElementById("caixa3").innerHTML=x1*x2; 
}

function dividir(x1, x2){
    document.getElementById("caixa4").innerHTML=x1/x2; 
}

var caixa=100;
function oi (x1){
    caixa= caixa - x1;
    document.getElementById("Caixa5").innerHTML=caixa;
 }
