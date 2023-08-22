(function(){
    var inputTitle=$("input").attr("title");
    $("button").click(function(){
        var input=$(this).next();//this--input element
        if(input.attr("title") === inputTitle){
            input.removeAttr("title");
        }else{
            input.attr("title",inputTitle);
        }
        $("#log").html("input title is now " + input.attr("title"));

    })
})(); //IIFE JS yapısı.fonskiyonun ardından hemen çağrısı yapılmış olur.
