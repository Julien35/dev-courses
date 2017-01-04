$(document).ready(function() {


    var maze = new Maze({
        x: 10,
        y: 10
    });



    maze.display();

    console.log(JSON.stringify(maze));

    var player = maze.newPlayer({
        img: 'mario.png'
    });


    setTimeout(function() {

        solve(player, maze, 5000);

    }, 1000);



});



function solve(player, maze, i) {
    if (i < 0) return;
    if (player.position.i == maze.END.i && player.position.j == maze.END.j) {
        alert('YOU WIN !');
        return;
    }


    //SOLVE THE MAZE HERE USING maze.forward(player), maze.left(player) and maze.right(player)
    //Functions above return true or false if movement succeded

    maze.forward(player) ? maze.right(player) : maze.left(player);

    setTimeout(function() {
        solve(player, maze, --i);
    }, 2);

}
