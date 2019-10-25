
const tirada = { 
        numeroDados: [],
        objetivo: [0],
        lanzarDados(){
            this.numeroDados[0] = Math.floor(Math.random() *(3 -1) + 1 ) ;
            this.numeroDados[1] = Math.floor(Math.random() *(3 -1) + 1 ) ;
            this.numeroDados[2] = Math.floor(Math.random() *(3 -1) + 1 ) ;
            this.numeroDados[3] = Math.floor(Math.random() *(6 -1) + 1 ) ;
            this.numeroDados[4] = Math.floor(Math.random() *(6 -1) + 1 ) ;
            this.objetivo[0] = Math.floor(Math.random() *(12 -1) + 1 ) ;
            
        }, 
        comprobarJugada(){
           
            if(parseInt(eval(ju.value))==this.objetivo[0]){
                document.getElementById("winLose").innerHTML = "Has ganado";
            console.log(ju);
                return true;
            }else{
                document.getElementById("winLose").innerHTML = "Perdiste";
                return false;
            }
        }
        
 } 

 /*for (let i = 1;i<6;i++){
     document.getElementById("tirada.objetivo"+i).innerHTML="Visual" + numeroDados[i-1];
     document.getElementById("numeroDados" + i).src="numeroDados/" + i + dado[i-1] + ".png"
}
*/

 const result = tirada.numeroDados;
 const dado12 = tirada.objetivo;
 

 
 