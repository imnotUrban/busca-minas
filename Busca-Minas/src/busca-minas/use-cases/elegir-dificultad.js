export const dificultad = (nivelDificultad = facil) => {

    // switch ($(this).attr('dificultad_1')) {
    switch (nivelDificultad) {
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
}