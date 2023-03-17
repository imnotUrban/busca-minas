

export const createMinas = (size) =>{

    //TODO aka deben estar las minas o maybe en app.js

        let aleatorio;



        let arr = [];
      
        // creating two-dimensional array
        for (let i = 0; i < size; i++) {
          arr[i] = [i];
          for (let j = 0; j < size; j++) {
            aleatorio = Math.floor(Math.random()*100);
            if(aleatorio<40)
                arr[i][j] = 1;
            else
                arr[i][j] = 0;
          }
        }
        return arr;
    
}