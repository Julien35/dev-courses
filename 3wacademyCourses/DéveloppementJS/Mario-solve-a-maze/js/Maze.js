function Maze(options) {
    var options = options || {}
    this.x = options.x || 5;
    this.y = options.y || 5; 

    this.cellSize = options.cellSize || 50;
    this.attach = options.attach || '#canvas';
    this.grid     = !options.grid  ? false : true;

    this.players = [];
    this.playerCount = 0;
    this.name = "Set";
    
    if(options.horiz && options.verti && options.END){
        this.horiz = options.horiz; 
        this.verti = options.verti;
        this.END = options.END;
        return this;
    }


    var n=this.x*this.y-1;
    if (n<0) {alert("illegal maze dimensions");return;}
    var horiz=[]; for (var j= 0; j<this.x+1; j++) horiz[j]= [];
    var verti=[]; for (var j= 0; j<this.y+1; j++) verti[j]= [];
    var here= [Math.floor(Math.random()*this.x), Math.floor(Math.random()*this.y)];
    var path= [here];
    var unvisited= [];
    for (var j= 0; j<this.x+2; j++) {
        unvisited[j]= [];
        for (var k= 0; k<this.y+1; k++)
            unvisited[j].push(j>0 && j<this.x+1 && k>0 && (j != here[0]+1 || k != here[1]+1));
    }
    while (0<n) {
        var potential= [[here[0]+1, here[1]], [here[0],here[1]+1],
            [here[0]-1, here[1]], [here[0],here[1]-1]];
        var neighbors= [];
        for (var j= 0; j < 4; j++)
            if (unvisited[potential[j][0]+1][potential[j][1]+1])
                neighbors.push(potential[j]);
        if (neighbors.length) {
            n= n-1;
            next= neighbors[Math.floor(Math.random()*neighbors.length)];
            unvisited[next[0]+1][next[1]+1]= false;
            if (next[0] == here[0])
                horiz[next[0]][(next[1]+here[1]-1)/2]= true;
            else 
                verti[(next[0]+here[0]-1)/2][next[1]]= true;
            path.push(here= next);
        } else 
            here= path.pop();
    }
    
    this.horiz = horiz; 
    this.verti = verti;
    
}

Maze.prototype.display = function() {
    var text= [];
    for (var j= 0; j<this.x*2+1; j++) {
        var line= [];
        if (0 == j%2)
            for (var k=0; k<this.y*4+1; k++)
                if (0 == k%4) 
                    line[k]= '<td height="'+this.cellSize+'" width="'+this.cellSize+'" class="stone"></td>';
                else
                    if (j>0 && this.verti[j/2-1][Math.floor(k/4)])
                        line[k]= '<td height="'+this.cellSize+'" width="'+this.cellSize+'" id="'+(j-1)+'_'+(k-1)+'" class="grass"></td>';
                    else
                        line[k]= '<td height="'+this.cellSize+'" width="'+this.cellSize+'" class="stone"></td>';
        else
            for (var k=0; k<this.y*4+1; k++)
                if (0 == k%4)
                    if (k>0 && this.horiz[(j-1)/2][k/4-1])
                        line[k]= '<td height="'+this.cellSize+'" width="'+this.cellSize+'" id="'+(j-1)+'_'+(k-1)+'" class="grass"></td>';
                    else
                        line[k]= '<td height="'+this.cellSize+'" width="'+this.cellSize+'" class="stone"></td>';
                else
                    line[k]= '<td height="'+this.cellSize+'" width="'+this.cellSize+'" id="'+(j-1)+'_'+(k-1)+'" class="grass"></td>';
        if (0 == j) line[1]= /*line[2]= line[3]=*/ '<td height="'+this.cellSize+'" width="'+this.cellSize+'" id="-1_0" class="grass"></td>';
        if (this.x*2-1 == j) {
            line[4*this.y]= '<td height="'+this.cellSize+'" width="'+this.cellSize+'" id="'+(j-1)+'_'+(k-2)+'" class="grass"></td>';
            this.END = {i: j-1, j: k-2};
        }
        text.push('<tr>'+line.join('')+'</tr>');
    }
    // console.log(text.join(''));
    $(this.attach).append(text.join('') + '</table>');
}

Maze.prototype.newPlayer = function(options) {
    var player = new Player(options);
    this.playerCount = this.players.push(player);
    this.movePlayer(player);
    // this.bindControls(this.playerCount - 1);
    return player;
};

Maze.prototype.isAllowed = function(newPosition){
    if($('#' + newPosition.i + '_' + newPosition.j).length) return true;
    // if(newPosition.i >= this.height 
    //     || newPosition.j >= this.width
    //     || newPosition.i < 0
    //     || newPosition.j < 0
    // ) return false;
    return false;
}

Maze.prototype.movePlayer = function(currentPlayer, newPosition) {
    var newPosition = newPosition || currentPlayer.position;
    
    if(!this.isAllowed(newPosition)) return false;

    var currentCell = $('#' + currentPlayer.position.i + '_' + currentPlayer.position.j);
    
    currentCell.css('content', '');

    //set new position
    currentPlayer.position = newPosition || currentPlayer.position;
    
    //show next img at position
    var nextCell = $('#' + currentPlayer.position.i + '_' + currentPlayer.position.j);
    nextCell.css('content', 'url(img/'+currentPlayer.img+')');
    return true;
};

Maze.prototype.forward = function(player) {
    var i = player.position.i, j = player.position.j;
    switch(player.dir){
        case 'n':
            i--;
            break;
        case 's':
            i++;
            break;
        case 'e':
            j++;
            break;
        case 'o':
            j--;
            break;
    }
    return this.movePlayer(player, {i : i, j: j});
};

Maze.prototype.left = function(player) {
    switch(player.dir){
        case 'n':
            player.dir = 'o';
            break;
        case 's':
            player.dir = 'e';
            break;
        case 'e':
            player.dir = 'n';
            break;
        case 'o':
            player.dir = 's';
            break;
    }
    return player;
};

Maze.prototype.right = function(player) {
    switch(player.dir){
        case 'n':
            player.dir = 'e';
            break;
        case 's':
            player.dir = 'o';
            break;
        case 'e':
            player.dir = 's';
            break;
        case 'o':
            player.dir = 'n';
            break;
    }
    return player;
};

Maze.prototype.bindControls = function(index) {
    if(index === undefined) throw 'Player not found';
    var player = this.players[index];
    var that = this;
    $(document).keydown(function(e){
        var i = player.position.i;
        var j = player.position.j;
        var key = e.keyCode;
        switch(key){
            case 40:
                ++i;
                break;
            case 38:
                --i;
                break;
            case 39:
                ++j;
                break;
            case 37:
                --j;
                break;
            default:
                break;
        }
        that.movePlayer(player, { i: i, j: j });
    });
};