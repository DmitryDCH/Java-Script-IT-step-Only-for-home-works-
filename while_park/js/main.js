/*
function money_data(){
    var money_value = document.querySelector(".money_value").value;
    //var atraction_value = document.querySelector(".atraction_value").value;

    var money = +money_value;
    //console.log(typeof(money));
    //console.log(typeof(atraction));
    
    if (money <= 0){
        console.log("R.T.F.M");
    }  else{
          while(money > 0){
               var atraction_value =  prompt("Enter value of atraction", " ");
               var atraction = +atraction_value;
          if( atraction <= 0 || atraction > 6 ){
               alert("Enter valid number of atraction");
          } else if (atraction == null){
               console.log("works");
          } else {
               switch(atraction){
                    case 1:
                         if (money < 100){
                              alert("Need more money");
                         } else{
                              money -=100;
                         }
                    break;
                    case 2:
                         if (money < 200){
                              alert("Need more money");
                         } else{
                              money -=200;
                         }
                    break;
                    case 3:
                         if (money < 50){
                              alert("Need more money");
                         } else{
                              money -=50;
                         }
                    break;
                    case 4:
                         if (money < 300){
                              alert("Need more money");
                         } else{
                              money -=300;
                         }
                    break;
                    case 5:
                         if (money < 250){
                              alert("Need more money");
                         } else{
                              money -=250;
                         }
                    break;
                    default:
                         console.log("How you do this ?");
                    break;
               }
          }
           alert("Now you have a " + money + "$");
        }
    }
    alert("You money is 0");
}

*/

function money_data(){
     var money_value = document.querySelector(".money_value").value;
     //var atraction_value = document.querySelector(".atraction_value").value;
 
     var money = +money_value;
     //console.log(typeof(money));
     //console.log(typeof(atraction));
 
     if (money <= 0){
         console.log("R.T.F.M");
     }else{
          while(money > 0){
             var atraction_value = prompt("Enter value of atraction", '');
               if (atraction_value === null) {
                  alert("cancel");
               return;
             }
             var atraction = +atraction_value;
               if( atraction < 0 || atraction > 6){
                 alert("Enter valid number of atraction")
               } else {
               switch(atraction){
                    case 1:
                         if (money < 100){
                              alert("Need more money");
                         } else{
                              money -=100;
                         }
                    break;
                    case 2:
                         if (money < 200){
                              alert("Need more money");
                         } else{
                              money -=200;
                         }
                    break;
                    case 3:
                         if (money < 50){
                              alert("Need more money");
                         } else{
                              money -=50;
                         }
                    break;
                    case 4:
                         if (money < 300){
                              alert("Need more money");
                         } else{
                              money -=300;
                         }
                    break;
                    case 5:
                         if (money < 250){
                              alert("Need more money");
                         } else{
                              money -=250;
                         }
                    break;
                    default:
                         console.log("How you do this ?");
                    break;
               }
             }
             alert("Now you have a " + money + "$");
         }
     }
     alert("You money is 0");
 }