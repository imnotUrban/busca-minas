let x;
let y;
let perimetro;
let cant;
    /**
     * Funcion que se basa en el control del juego
     */
    export const gameManage = (cuadricula) => {

        /**Cada vez que se hace click en el tablero cambia de color las piezas y agrega la calse mina */
        $(".grid").click(function() {
            // $(this).css("background-color", "black");
            perimetro = validacion($(this).prop("id"),cuadricula);
            if(perimetro === "mina"){
                $(this).addClass('mina');
                let imageUrl = "src/img/mina.png";
                $(this).css("background-image", "url(" + imageUrl + ") ");
                $(this).css('background-repeat', 'no-repeat');
                $(this).css('background-position', 'center');
                $(this).css('background-size', 'cover'); // sets the height
            }else{
                let imageUrl_libre = `src/img/${perimetro}.png`;

                $(this).css("background-image", "url(" + imageUrl_libre + ") ");
                $(this).css('background-repeat', 'no-repeat');
                $(this).css('background-position', 'center');
                $(this).css('background-size', 'cover');
                $(this).addClass('libre');

            }
            
            
        });
    }



    const validacion = (id,cuadricula) =>{
        x = Number(id[0]);
        y = Number(id[1]);
        console.log(x,y);
        console.log(cuadricula[x][y]);
        console.log(cuadricula);
        if(cuadricula[x][y]===1)return "mina";
        cant = 0;
        for(let i = x-1; i<x+2; i++){
            for(let j = y-1; j<y+2; j++){
                if(i>-1 && j>-1 && i<cuadricula.length && j<cuadricula.length)
                    if(cuadricula[i][j])cant++;
                    
            }
        }
        console.log("cantidad de minas: ",cant);
        return cant;



        //TODO for para ver cuantas minas tiene al rededor o si es una mina

        
    }