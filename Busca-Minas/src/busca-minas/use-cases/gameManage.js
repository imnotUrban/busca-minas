
    /**
     * Funcion que se basa en el control del juego
     */
    export const gameManage = () => {

        /**Cada vez que se hace click en el tablero cambia de color las piezas y agrega la calse mina */
        $(".grid").click(function() {
            // $(this).css("background-color", "black");
            $(this).addClass('mina');
            validacion($(this).prop("id"));
            
        });
    }



    const validacion = (id) =>{
        
        console.log("id",id);

    }