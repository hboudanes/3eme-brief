function validname(){
    var letters =/^[A-Za-z]+$/;
    var nom = document.getElementById("name").value;

    if(letters.test(nom)==true){
            alert('Le nom est valid');
       }
   else{
          alert('Le nom pas valid');
       }
    } 
    
    function validEmail(){
        var email = document.getElementById("email").value;
        var em = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2})+$/;
        
        if(em.test(email)==true){
            alert('Email est valid');
          }
       else{
          alert('Email pas valid');
       }
        
      }

    function validpassword(){
        var password = document.getElementById("password").value;
        var pas = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2})+$/;
    
    if (pas.test(password)==true){
          alert('Mot de passe est valid');
    }
    else {
        alert('Mot de passe pas valid');
    }


    
    }  

    
 