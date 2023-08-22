para=$("p"); 
para
    .prop("class","myClass")
    .append("class is " , para.prop("class"),".")
    .removeProp("class")
    .append("class is " , para.prop("class"),".");
    //zincirleme(Chaining):her fonksiyonu ayrı ayrı da yazabilirdik ama kodu kısaltma amaçlı zincirleme yaptık
    