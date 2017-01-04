function Item(options) {

    var options = options || {};

    this.position = options.position || {
        i: 1,
        j: 1
    };
    this.img = options.img;

}

Item.prototype.display = function() {

    displayImageAt(this.position, this.img);
}
