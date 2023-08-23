$(document).ready(function(){
    $("input").keyup(function(){ //keyup:klavyeden elini çektiğin an devreye girer.
        var value=$(this).val(); //İnputun içindeki değeri alıyoruz
        $("p").text(value);
    });
    $("input").keyup(); //sayfa çalıştığı anda da p etiketi direkt yazı yazmadan görünsün diye bunu koyduk.Bu olmasa da çalışıyor.
});

//val() değeri alır yani return eder.İçine parametre verirsek set() eder.