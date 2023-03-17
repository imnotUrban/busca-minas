import html from './app.html?raw';
import { createGrid,dificultad, clearGrid,refreshGrid,gameManage, createMinas } from './use-cases/index';

//TODO: Crear clase "minas"

let cuadricula;
let sizeC;
/**
 * 
 * @param {String} elementId elemento que renderiza la app 
 */
export const App = (elementId) =>{

    //Tamaño por defecto (Facil - 5x5)
    let size = 5;
    
    /**
     * función lista para esperar cualquier cambio en el dom
    */
    $(document).ready(function() {
        /*
            Al tocar el botón de alguna dificultad, esta agrega la clase hidden e inicializa el juego
        */
        $(".dif").click(function(){
            //Recibe la dificultad para crear un nuevo grid
            sizeC = dificultad($(this).attr('dificultad_1'));
            cuadricula = createMinas(sizeC);
            gameManage(cuadricula);

        });

        gameManage(cuadricula);
    
        $(".newGrid").click(function() {
            clearGrid();
            /**
             * Imagen provisoria
             */
            let imageUrl = "src/img/vacio.jpg";
            $("#container-grid").css("background-image", "url(" + imageUrl + ")");


            
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
        cuadricula = createMinas(size);

    })();

}