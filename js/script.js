// JavaScript

$("document").ready(function() {
    setInterval(function() { 
        $(".alert").fadeOut(1000, function(){ $(this).remove();});
    }, 2000);
});