
//hasClass()-->true ya da false döner.İlgili element verieln classa sahipse true döner

//ÖRNEK1
    $("#result3").append($("p").hasClass("selected").toString());
//önce appendin içindeki iç parantezi anlayalım: p etiketlerinden herhangi biri selected classına sahip mi? True
//appendin içi TRUE oldu.//result3 idli etiketin sonuna true stringi eklenecek.


//append() sona ekler

//ÖRNEK2:
$("#result1").append("<p>eklenen paragraf</p>"); //p etiketini divin içine ekledi.
const myDiv=document.getElementById("result1").innerHTML;
console.log(myDiv); 
