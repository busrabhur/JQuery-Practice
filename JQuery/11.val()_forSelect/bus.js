function displayVals(){ 
    var singleVal=$("#single").val(); //single id li dropdownda seçilen değeri döndürür.
    var multipleVal=$("#multiple").val(); //nultiple id li dropdown da seçilen değeri döndürür.
    $("p").html("<b>Single:</b> " +singleVal +"<b>Multiples:</b> "+multipleVal.join(", "));
}

$("select").change(displayVals); //select işlemlerinde yani dropdowndaki değişiklikte bu fonksiyon çağırılacak


//change() :fonksiyonu, jQuery kütüphanesinde form öğelerinin değeri değiştiğinde veya seçimler yapıldığında tetiklenen bir olay (event) işleyicisini belirtmek için kullanılan bir yöntemdir. Bu fonksiyon, özellikle <input>, <select>, <textarea> gibi form öğeleri için kullanılır ve kullanıcı tarafından yapılan değişikliklerde çalışır.

//val() fonksiyonu, jQuery kütüphanesinde bir form öğesinin (input, select, textarea vb.) değerini almak veya ayarlamak için kullanılan bir yöntemdir. Bu fonksiyon, form öğelerinin değerini alma ve ayarlama işlemlerini daha kolay hale getirir.
