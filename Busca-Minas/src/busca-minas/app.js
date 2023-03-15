import html from './app.html?raw';
import { dificultad } from './use-cases/elegir-dificultad';


//TODO: Crear clase "minas"


/**
 * 
 * @param {String} elementId elemento que renderiza la app 
 */

const ElementIDs = {
    Grid: 'grid'
}



export const App = (elementId) =>{

    let size = 4;
    let stringTemp = "";
    /**
     * Crea el tablero con un tamaño por defecto de 4
     * @param {Int} size 
     */
    const createGrid = (size)=>{
        for(let rows = 0; rows < size; rows++){
            for(let columns = 0; columns < size; columns++){
                stringTemp = `${rows}${columns}`;
                $("#container-grid").append(`<div class='${ElementIDs.Grid}' id=${stringTemp}></div>`);
            };
            
        };
        $(".grid").width(960/size);
        $(".grid").height(960/size);
    }
    

    /**
     * Limpia el tablero
     */
    const clearGrid = () =>{
        // $(".grid").remove();
        $(".grid").remove();

    }
    
    /**
     * Refresca el tablero y lo reinicia con un tamaño de 4
     * @param {Int} z 
     */

    const refreshGrid = (z = 4) =>{
        clearGrid();
        createGrid(z);
    }


    /**
     * Funcion que se basa en el control del juego
     */
    const gameManage = () => {

        /**Cada vez que se hace click en el tablero cambia de color las piezas y agrega la calse mina */
        $(".grid").click(function() {
            // $(this).css("background-color", "black");
            console.log(($(this).prop("id")));
            $(this).addClass('mina');
        });
    }

    
    
    /**
     * función lista para esperar cualquier cambio en el dom
    */

    $(document).ready(function() {

        /*
            Al tocar el botón de alguna dificultad, esta agrega la clase hidden e inicializa el juego
        */
        $(".dif").click(function(){

            switch ($(this).attr('dificultad_1')) {
                case 'facil':
                    refreshGrid(5);
                    $("#dificultades").toggle('slow');
                    
                    break;
                case 'medio':
                    clearGrid();
                    createGrid(7);
                    $("#dificultades").toggle('slow');

                    break;
                case 'dificil':
                    clearGrid();
                    createGrid(10);
                    $("#dificultades").toggle('slow');

                    break;
                            
            }

            gameManage();
        });

        gameManage();
    
        $(".newGrid").click(function() {
            refreshGrid();
            
            // $("#dificultades").removeClass();
            $("#dificultades").toggle('slow');

        });

    

    });


    /**
     * Función autoinvocada que renderiza la app
     */
    (()=>{
        const app = document.createElement('div');
        app.innerHTML = html;
        document.querySelector(elementId).append(app);
        createGrid(size);
    })();

}