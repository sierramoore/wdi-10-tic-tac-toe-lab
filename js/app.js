console.log("tick tak toe")

// give button clear board an on click event handler
$('#clear-board').on('click', () =>{
    console.log("clicked")
});
//store board in variable to use later
let board = $('#board');
// console.log(board);

//global variable for x and o toggle
let xo = true;

// event handler for event listener in for loop
function someFunction(event) {
    // console.log(event);
    // console.log("this function someFunction was run");

    if(xo === true){
        xo = false;
        $(event.currentTarget).html("X").off("click");

    }else{
        $(event.currentTarget).html("O").off("click");
        xo = true;
    }

}



for(i=0; i < 9; i++){
    // make new div's with class square -> will be used as gameboard
    let div = $('<div>').attr('class', 'square');
    //append div to board
    $(board).append(div);


    //created event listener using event handler as callback -> applies to individual div
    div.on('click', someFunction);
// someFunction(e);
}




