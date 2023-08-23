//val(value):içine parametre verirsek input dropdown vs için set etme amacıyla val(x) i kullanabilirz
$("button").click(function(){
    var text=$(this).text();
    $("input").val(text); //İnputun value değeri değişti.
})