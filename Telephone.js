function telephoneCheck(str) {
    var  r = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
    return r.test(str);
  }
  
  function myCheck(){
      var n = document.getElementById('user-input').value;
    if (telephoneCheck(n) == true) {
        document.getElementById("demo").innerHTML = "Це правильний телефонний номер.";
  } else {
   document.getElementById("demo").innerHTML = "Це не правильний телефонний номер.";
  }
   }
   function myClean(){
    document.getElementById('user-input').value = "";
    document.getElementById("demo").innerHTML = "";
   }
