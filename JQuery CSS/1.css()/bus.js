//returning with css()
$(document).ready(function(){
    $("#but1").click(function(){
        $("#p1").css("background-color","yellow"); //set value
        alert("color: "+$("p").css("color")); //tek parametreli css() ilgili propertynin değerini return eder.
       //birden fazla css property sini aynı anda set etme
       $("#para1").css({"color":"white","background-color":"green"});
    });

});


//set value with css()

