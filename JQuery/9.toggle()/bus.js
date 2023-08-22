//Eğer öğe üzerinde belirtilen sınıf zaten varsa, toggleClass() onu kaldırır; yoksa ekler.Her tıklamada durum değişir.tersine döner
//addClass() ile removeClass() karışımıdır.

$("p").click(function(){
    $(this).toggleClass("highlight");
});