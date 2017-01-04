// id="loginModal"
// id="loginbutton"
$(document).ready(function() {

    $("#loginbutton").click(function() {
        $('#loginModal').modal('toggle');
    });

    $("#registerbutton").click(function() {
        $('#registerModal').modal('toggle');
    });

    $("#logoutbutton").click(function() {
        console.log("logout");
    });
});
