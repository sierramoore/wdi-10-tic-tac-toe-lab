console.log("tick tak toe")

// give button clear board an on click event handler
$('#clear-board').on('click', () =>{
    console.log("clicked")
});
//store board in variable to use later
let board = $('#board');
console.log(board);

for(i=0; i < 9; i++){
    //div are the squares
    // make new div's with class square
    let div = $('<div>').attr('class', 'square');
    //append div to board
    $(board).append(div);

}