let jugada;
tirada.lanzarDados()
console.log(tirada.numeroDados);
   jugada = ("El objetivo es "+tirada.objetivo);
  
document.getElementById("Visual");

Visual.innerHTML = result;

document.getElementById("dadoDoce");

dadoDoce.innerHTML = dado12;


  
if(tirada.numeroDados == 1){
   document.getElementById("Visual").src = "img/dado1.png";
}else{
   console.log("no funciona");
};