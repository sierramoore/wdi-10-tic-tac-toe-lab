console.log("tick tak toe")



// give button clear board an on click event handler
$('#clear-board').on('click', () =>{
    console.log("clicked");
    $('.square').html("");
});


let isGameOver = function (state, coordinates){
  return true;
};

let gameOver = function (){
    console.log("game over")
};


// event handler for event listener in for loop
function someFunction(event) {

    //gets cuurent click and get parnt element which is the entire board
    //and after we get board then we get the custom attr
    //using current tartget we can acseess the coordinates of the current div
    let state = $(event.currentTarget).parent().data("state");
    console.log(state);
    let coordinates = $(event.currentTarget).data("coordinates");
    console.log(coordinates);


    // if (the cell is not empty)
    if(state.cells[coordinates.row][coordinates.col] !== " ")
        return;


    if(state.xo === true){
        state.xo = false;
        $(event.currentTarget).html("X");
        //replace empty space in array with occupied x
        state.cells[coordinates.row][coordinates.col] = "X";
        $('#turn').html("Now its O's turn");
    }else{
        state.xo = true;
        $(event.currentTarget).html("O");
        //replace empty space in array with occupied O
        state.cells[coordinates.row][coordinates.col] = "O";
        $('#turn').html("Now its X's turn");

    }

    if (isGameOver(state, coordinates))
        gameOver();
}

let createBoard = function(cols, rows){
    let board = $('<div>');

    let state =  {
        xo: true,
        rows: rows,
        cols: cols,
        //saves state of board and checks for win after each move
        //parent array
        cells: new Array(rows)

    };
    //string "state" is the custom attr -- state is the obj
    board.data("state", state);
    console.log(board);

    for(i=0; i < rows; i++){
        //creates an array to hold the state of the elements of the current row
        //acseess current row in parent array and assign it the current iteration of row
        //initialize child array with number of colums
        state.cells[i] = new Array(cols);

        for(j=0; j < cols; j++){
            let cell = $('<div>').attr('class', 'square');
            cell.data("coordinates", {row: i, col: j});
            cell.on('click', someFunction);
            $(board).append(cell);

            //for each cols make an empty space string to indicate an unplayed cell
            state.cells[i][j] = " ";
        }
        //after each row insert break
        let endRow = $('<br>');
        $(board).append(endRow);
    }

    return board;
};
let b = createBoard(3, 3);
//append board to the body
$('body').append(b);


$('<br>').appendTo('body');
$('body').append(createBoard(5, 3));



























