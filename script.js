//Parametro size recibirá el argumento del tamaño del lienzo (El usuario determinará el tamaño)
function boardSize(size){

    let board = document.querySelector('.board');
    let square = board.querySelectorAll('div')

    //square.forEach((div) => div.remove()); Eliminar los pintados?
    

    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`//Tamaño por defecto 16x16
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`

    //El lienzo se ajustará al nuevo tamaño, y no habrá error de distribución.
    let divAmount = size * size
    for(let i = 0; i<divAmount; i++){
        let square = document.createElement('div');
        square.addEventListener('mouseover', ()=>{square.style.backgroundColor = "green"})
        square.style.backgroundColor = "yellow"
        board.appendChild(square);//Se puede usar tambien insertAdjacentElement
    };

};

boardSize(16);

//Función que recibirá el tamaño colocado por el usuario.
function changeSize(input){
    if (input >= 3 && input <= 256){//Tamaños aceptados
        boardSize(input);
    } else {
        console.log("NO aceptada la cantidad")
    }


    
};