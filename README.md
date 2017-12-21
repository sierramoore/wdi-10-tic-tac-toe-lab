![ga](http://mobbook.generalassemb.ly/ga_cog.png)

# wdi-10-chi

<hr>
Title: Front End Tic Tac Toe<br>
Type: Lab that becomes a homework<br>
Creator: Thom Page, WDI-Matrix<br>
Modified by: Jim Haff and Reuben Ayres<br>
Topics: Using loops to create multiple elements, Setting a click listener within the loop, Setting a click handler that will target the clicked element with `$(e.currentTarget)` and/or using event delegation.<br>
<hr>

### SETUP

* In your directory for today:

* Make a directory `tic_tac_toe_lab`

* **Fork this repo.** Go to `tic_tac_toe_lab` and clone your fork into there.

* **Go into the cloned directory and make a directory that is your first name.** I will be accepting and merging the pull requests this time, so your code will be out there for each other (or anyone) to see. Therefore, particularly for the instructions at the end that are less guided, have your code and your comments reflect a well-reasoned thought process and make your code easily human-readable and human-understandable.

* Inside the folder that is your first name, do the usual setup **and include jQuery** and do what's necessary to make sure it's all linked.

* `git add -A`

* `git commit -m "Created file structure."` (because you forked a repo I made, so this is not the initial commit.  When you build your own project from scratch, use "initial commit" or "first commit" for the first commit.)



<br>
<hr>

### Put a button on it

* In your `index.html`, write in a button. Give it an id of `clear-board`. The button will eventually 'clear' the game, so for now put the text `clear board` between the `<button>` tags.

* Give your button a click listener.

* Give the listener a handler so that when the button is clicked, a message 'clicked' appears in the console. This is just to check that the click works. Always test your click events!

:red_circle: **Do a commit**.

### Make the game board

* In your `index.html`, make a div with id `board` on your page, and set its height and width to 800px. Make it so the div has a background color or border so that you can see it.

* Inside your javascript, grab the board div with `$('#board')` and save it to a variable so that you can reference it later.

* Below your board div variable, write a `for loop` that iterates 9 times, and each time (ie. you only have to write it once within the loop), it will:

  * generate a `div` dynamically and remember to save it to a variable too!

  * Inside the loop, give your div a class `square` using any way that you like `.addClass`, `.attr`, etc.

  * append the div to the board div.

* Adjust your css so that you can see the squares when they are appended (suggestions):
  * Adjust your css so that the square will have a height and width of something like 250px.
  * Give your div a border of 1px solid black, and perhaps a background-color.

* Make it so the divs align in a 3x3 grid. Hint: if the squares are set to `display: inline-block`, and they are the right size, they will adjust position according to the size of the board div. Or you could use flexbox or CSS grid or CSS's "calc" to get it perfect.

**Make sure your 3x3 grid is generated, visible, and ready to go!**

:red_circle: **Do a commit**.  You might should've done one since the last time but definitely do another one now if you haven't yet.

### Next... clicks...

* We want to make it so that when any of these squares is clicked, that we can have something happen to the individual square that was clicked.

* Back inside your for loop, give the square a click listener that references a _named function_

example: `element.on('click', someFunction)`

someFunction is the _name_ of the function that we haven't yet written. It will be defined elsewhere, rather than just passing an anonymous callback `const someFunc = () => () { ... }` into the listener as the second parameter (which is the _Event handler_) after 'click'.

:red_circle: **Do a commit**.

### Make each individual square show an X when clicked

* Define your handler function _above_ the for loop so that it will be defined before the loop runs, and make it so that when a square is clicked, an 'X' will appear inside the square that was clicked. Use the power of keyword `e.currentTarget` inside your handler function to apply the text.

```
$(e.currenTarget).text("X")

//or

$(e.currentTarget).html("X")
```

**STYLE**

* In your css file:
* Change the size of the 'X' font in your square class to something bigger
* Center the 'X' font within the div. `text-align: center`
* Vertically align your 'X' within the square:
  * Set `line-height` to the height of the square div (250px)
  * Set `vertical-align: middle`

When you add text the square, it might vertically rearrange your squares. To keep them in line, investigate setting `overflow: hidden` on your square class. Or alternatively, google it!

:red_circle: **Do a commit**.

### Make the squares show an X or an O

FIGURE IT OUT

By toggling a global variable to either `true` or `false`, make it so that when a user clicks on a square, it will alternate between displaying 'X' and 'O'

:red_circle: **Do a commit**.

FIGURE IT OUT

Finally, make it so that a square will not change its 'X' or 'O' if it has already been clicked.

:red_circle: **Do a commit**.

### Clear the board

FIGURE IT OUT

Make it so that when you click the clear board button, the game resets

![Screen-shot](https://i.imgur.com/kz2L9f9.png)
![Screen-shot](https://i.imgur.com/d8lFshD.png)

:red_circle: **Do a commit**.

* Create the logic to make the game work!

:red_circle: **Do a commit**.

* Get the game to announce if someone wins, which piece won ("X" or "O").

:red_circle: **Do a commit**.

* Optional: keep track of the score for each piece Ex: `O: 2, X: 4`

* Figure out how to reset the board (this will clear the board and clear the scores).

:red_circle: **Do a commit**.

# CSS Videos

#### Transform

Watch [this video](https://www.youtube.com/watch?v=Gu-HBBZLyjg&list=PLdnONIhPScST0Vy4LrIZiYKpFNoxgyH7J&index=29)

#### Motion


1. Watch [this video](https://www.youtube.com/watch?v=Xu3SrQhtBqw&list=PLdnONIhPScST0Vy4LrIZiYKpFNoxgyH7J&index=30) about transitions.
1. Watch [this video](https://www.youtube.com/watch?v=9RfHG3K8U_Q&list=PLdnONIhPScST0Vy4LrIZiYKpFNoxgyH7J&index=31) about animation.

#### Design

1. Watch [this video](https://www.youtube.com/watch?v=M1syJPviLkU&list=PLdnONIhPScST0Vy4LrIZiYKpFNoxgyH7J&index=13)
