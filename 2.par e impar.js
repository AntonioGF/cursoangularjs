(function numeros(num){
  'use strict'
  debugger
   
  var cont=0;
      for(cont=0;cont<=num;cont++){
          
        if(cont%2==0){
            console.log(cont+" es par");

        }else{
            console.log(cont+" es impar");
          
        } 
             
    } numeros(3);

})()