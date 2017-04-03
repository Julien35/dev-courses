$(document).ready(function() {

    if (!window.cart) {
        window.cart = new Cart();
        cart.toggle();
        cart.removeAll();
        cart.removeCartPaid();
    }

});
