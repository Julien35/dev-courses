function Item(options) {

    var options = options || {};

    this.position = options.position;
    this.img = options.img;

}

Item.prototype.display = function() {

    displayImageAt(this.position, this.img);

    // console.log("Item.display()");
    //
    // id = "#" + this.position.i + "_" + this.position.j;
    // console.log(id);
    // $(id).css('content', "url('" + this.img + "')");
}
