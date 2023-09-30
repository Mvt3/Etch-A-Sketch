boardSize(16);
let color="white";

//Parametro size recibirá el argumento del tamaño del lienzo (El usuario determinará el tamaño)
function boardSize(size){

    let board = document.querySelector('.board');
    let square = board.querySelectorAll('div')

    square.forEach((div) => div.remove()); //Eliminar todo, para cuando se cambie el tamaño, este limpio
    

    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`//Tamaño por defecto 16x16
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`

    //El lienzo se ajustará al nuevo tamaño, y no habrá error de distribución.
    let divAmount = size * size
    for(let i = 0; i<divAmount; i++){
        let square = document.createElement('div');
        square.addEventListener('mouseover', divColor)
        square.style.backgroundColor = "white"
        board.appendChild(square);//Se puede usar tambien insertAdjacentElement
    };

};

//Función que recibirá el tamaño colocado por el usuario.
function changeSize(input){
    if (input >= 3 && input <= 150){//Tamaños aceptados
        boardSize(input);
    } else {
        console.log("NO aceptada la cantidad")
    }


    
};

//Establece el color
function divColor(){

    if(color === "rainbow"){
        this.style.backgroundColor = `hsl(${Math.random()*360}, 100%, 50%)`;
    }else{

        this.style.backgroundColor = color;//This se refiere al elemento HTML que activa la funct
    };

   
};


//Cambia el color
function colorChange(choice){
    color = choice;
    
    
};

//Borra todo lo pintado en el tablero
function resetBoard(){
    let board = document.querySelector('.board');
    let square = board.querySelectorAll('div')
    square.forEach((div) => div.style.backgroundColor="white");
}

