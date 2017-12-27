console.log("tick tak toe")
// give button clear board an on click event handler
$('#clear-board').on('click', () => {
    //clear html
    $('.square').html("");
    //get board -- for each board (if multiple)
    $('.board').each(function () {
        // console.log($(this).data("state"))
        for (let i = 0; i < $(this).data("state").rows; i++) {
            for (let j = 0; j < $(this).data("state").cols; j++) {
                //for each row and column overwrite x's and o's with an empty space in array
                $(this).data("state").cells[i][j] = " ";
            }
        }
    })
});


let isGameOver = function (state, coordinates) {
    for (let i = 0; i < state.rows; i++) {
        for (let j = 0; j < state.cols; j++) {
            if(state.cells[i][j] === " ")
                return false;
        }
    }
    return true;
};

//takes param board which is passed as argument in someFunction
let gameOver = function (board){
    console.log("game over");
    // console.log(board.css('backgroundColor', 'pink'));
};


// callback for onclick
function someFunction(event) {
    let cell = $(event.currentTarget);
    console.log(cell);
    let board = cell.parent();
    //gets cuurent click and get parnt element which is the entire board
    //and after we get board then we get the custom attr
    //using current cell we can acseess the parent dv coordinates of the current div
    let state = board.data("state");
    console.log(state);
    //locate the row and colum of currently clikced cell
    let coordinates = cell.data("coordinates");
    // console.log(coordinates);


    // if game over is true or (the cell is not empty)
    if(state.isGameOver || state.cells[coordinates.row][coordinates.col] !== " ")
        return; //then dont keep modifying it with x and o


    if(state.xo === true){
        state.xo = false;
        $(event.currentTarget).html("X");
        //replace empty space in array with occupied x
        state.cells[coordinates.row][coordinates.col] = "X";
        $('#turn').html("O's turn");
    }else{
        state.xo = true;
        $(event.currentTarget).html("O");
        //replace empty space in array with occupied O
        state.cells[coordinates.row][coordinates.col] = "O";
        $('#turn').html("X's turn");

    }
    // isGameOver also checks for which board the game is over if multiple
    if (isGameOver(state, coordinates)){
        gameOver(board);
        state.isGameOver = true;

    }

}

let createBoard = function(cols, rows){
    //parent div to cells with custom attr state and a class board
    let board = $('<div>').attr('class', 'board');
    //saves state of board and will help check for win after each move
    let state =  {
        isGameOver: false,
        xo: true,
        rows: rows,
        cols: cols,
        //parent array
        cells: new Array(rows)
    };
    //string "state" is the custom attr -- state is the obj
    board.data("state", state);
    // console.log(board);

    for(let i=0; i < rows; i++){
        //creates an array to hold the state of the elements of the current row
        //acseess current row in parent array and assign it the current iteration of row
        //initialize child array with number of colums
        state.cells[i] = new Array(cols);

        for(let j=0; j < cols; j++){
            let cell = $('<div>').attr('class', 'square');
            //find which row and column
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





























