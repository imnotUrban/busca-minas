import { clearGrid,createGrid } from "./index";

/**
* Refresca el tablero y lo reinicia con un tamaño de 4
* @param {Int} z 
*/

export const refreshGrid = (z = 4) =>{
   clearGrid();
   createGrid(z);
}