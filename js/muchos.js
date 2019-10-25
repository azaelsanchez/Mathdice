var tirada = { 
    numeroDados: [],
        lanzarDado() {
            for (var i = 0; i < 5; i++ ){ 
            if( 1 < 3 ){
            this.numeroDados[i] = Math.floor(Math.random() *(3 -1) + 1 ) ;
            
        } else {
                this.numeroDados[i] = Math.floor(Math.random() *(6-1) + 1);
            }
        }
        this.numeroDados[5] = Math.floor(Math.random() *(12 - 1) + 1);
        },    
    } 
