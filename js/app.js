console.log("tick tak toe")

// give button clear board an on click event handler
$('#clear-board').on('click', () =>{
    console.log("clicked")
});
//store board in variable to use later
let board = $('#board');
console.log(board);

for(i=0; i < 9; i++){
    // make new div's with class square -> will be used as gameboard
    let div = $('<div>').attr('class', 'square');
    //append div to board
    $(board).append(div);
}

//naming someFunction will create later as a placeholder
$('.square').on('click', someFunction = () =>{
    console.log("square clicked");
});

