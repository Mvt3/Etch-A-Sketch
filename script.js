//Parametro size recibirá el argumento del tamaño del lienzo (El usuario determinará el tamaño)
function boardSize(size){

    let board = document.querySelector('.board')
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`//Tamaño por defecto 16x16
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`

    for(let i = 0; i<256; i++){
        let square = document.createElement('div');
        square.style.backgroundColor = "yellow"
        board.appendChild(square);//Se puede usar tambien insertAdjacentElement
    };

};

boardSize(32);

//Función que recibirá el tamaño colocado por el usuario.
function changeSize(input){
    boardSize(input);
};