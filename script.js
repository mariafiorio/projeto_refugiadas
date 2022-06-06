    function validarFormulario(){
        var nomePessoa = document.forms["formNewsletter"]["nome"].value;
      var emailPessoa = document.forms["formNewsletter"]["email"].value;
        if (emailPessoa == "") {
            alert("Favor informar o seu nome e e-mail!");
            return false;     
        }
        else{
            alert("Pronto, " + nomePessoa + ". Cadastro confirmado!");
            return true;
        }
    }

