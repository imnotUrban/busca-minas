let size = 6;
let stringTemp = "";

/**
     * Crea el tablero con un tamaño por defecto de 4
     * @param {Int} size tamaño del tablero
*/
export const createGrid = (size = 4)=>{
    for(let rows = 0; rows < size; rows++){
        for(let columns = 0; columns < size; columns++){
            stringTemp = `${rows}${columns}`;
            $("#container-grid").append(`<div class='grid' id=${stringTemp}></div>`);
            // console.log('id: ',stringTemp)
        };
        
    };

    $("#container-grid").css('background-image' , 'none');
    $(".grid").width(960/size);
    $(".grid").height(960/size);
}