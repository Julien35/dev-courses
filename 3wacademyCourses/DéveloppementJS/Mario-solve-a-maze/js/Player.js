function Player(options){
	var options = options || {};
	this.position = options.position || { i:-1, j:0 };
	this.name = options.name || 'Mario';
	this.img = options.img || 'mario.png';
	this.dir = 's';
};