function Cart() {

    this.products = this.loadStorage();
    this.isDisplayed = false;
    this.cart_link = $(".cart-link");
    this.cart = $('.cart');
    this.cart_container = $(".cart-container");
    this.total = 0;
    this.product_count = Object.keys(this.products).length;
    var timeOut;

}

Cart.prototype.toggle = function() {

    that = this;
    this.cart_link.click(function() {
        if (that.isDisplayed) {
            that.cart.hide();
            that.isDisplayed = false;
        } else {
            that.draw();
            that.cart.show();
            that.isDisplayed = true;
        }
    });
};

Cart.prototype.add = function(id, name, photo, msrp) {
    // console.log(id, name, photo, msrp);

    if (!this.products[id]) {
        this.products[id] = {
            count: 1,
            name: name,
            photo: photo,
            msrp: msrp
        };
    } else {
        this.products[id] = {
            count: this.products[id].count + 1,
            name: name,
            photo: photo,
            msrp: msrp
        };
    }

    this.draw();
    // console.log(this.products);
};

Cart.prototype.loadStorage = function() {
    var productsJson = localStorage.getItem('products');
    if (productsJson !== null) {
        var products = JSON.parse(productsJson);
        return products;
    }
    return {};
};

Cart.prototype.saveStorage = function(products) {
    var productsJson = JSON.stringify(products);
    localStorage.setItem('products', productsJson);
};

Cart.prototype.remove = function(id) {

};

Cart.prototype.removeAll = function() {
    that = this;
    $('#empty-cart').click(function() {
        that.products = {};
        that.total = 0;
        that.draw();
    });
};
// empty-cart-payment
Cart.prototype.removeCartPaid = function() {
    that = this;
    $('#empty-cart-payment').click(function() {
      localStorage.removeItem('products');
      that.draw();
    });
};

Cart.prototype.calcTotal = function() {
    var total = 0;

    for (var key in this.products) {
        var product = this.products[key];
        total += product.count * product.msrp;
    }
    this.total = total;
};

Cart.prototype.draw = function() {

    var that = this;
    clearTimeout(this.timeOut);
    this.cart_container.empty();

    if (this.products) {

        var td;
        var tr;

        for (var key in this.products) {
            // console.log(this.products);
            // console.log(key);
            var product = this.products[key];
            // console.log(product);
            tr = $('<tr>');
            td = $('<td>');
            input = $('<input readonly>');


            tr.append("<td>" + product.name + "</td>");

            input.val(product.count);
            input.attr('type', 'number');
            input.attr('name', "products["+key+"]");
            td.append(input);
            tr.append(td);
            // tr.append("<td>" + product.count + "</td>");
            tr.append("<td>" + product.msrp + " € </td>");
            tr.append("<td>" + product.count * product.msrp + " € </td>");

            this.cart_container.append(tr);
        }


        $("#cart-container td").addClass("col-md-4");


        this.calcTotal();
        $('#total').text(this.total + " €");

        timeOut = setTimeout(function() {
            that.saveStorage(that.products);
        }, 500);
    }
};
