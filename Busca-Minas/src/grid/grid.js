const createGrid = (size = 4)=>{
    for(let rows = 0; rows < size; rows++){
        for(let columns = 0; columns < size; columns++){
            stringTemp = `${rows}${columns}`;
            $("#container-grid").append(`<div class='grid' id=${stringTemp}></div>`);
            // console.log('id: ',stringTemp)
        };
        
    };
    $(".grid").width(960/size);
    $(".grid").height(960/size);
}

const clearGrid = () =>{
    // $(".grid").remove();
    $(".grid").remove();

}

const refreshGrid = (z = 4) =>{
    clearGrid();
    createGrid(z);
}


/**
 * Controla el juego
 */
const gameManage = () => {

    /**Cada vez que se hace click en el tablero cambia de color las piezas y agrega la calse mina */
    $(".grid").click(function() {
        // $(this).css("background-color", "black");
        console.log($(this).prop("id"));
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


        gameManage();
    });

    

    

});