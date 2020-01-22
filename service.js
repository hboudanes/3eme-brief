function validation(){
  var date = document.getElementById('Date').value;
  var date2 = document.getElementById('Date2').value;
  
  if(date == "" || date2 == "" ){
    alert("tu doit remplir tous les champs possible");
  }else{
    if(validdate(date) && validdate(date2)){

      alert('La forme bien valide');

    }else{
        alert("la forme n'est pas valider");
     
      
   }
  }

  }
function validdate(date){
    var expression = /^([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))$/;
    var valider = expression.test(date);
    return valider;
}
