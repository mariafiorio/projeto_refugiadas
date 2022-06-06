# O que é o repositório projeto_refugiadas?

Trabalho referente a disciplina Construção de Software para Web.
> Desenvolva um protótipo funcional em HTML5 de um aplicativo de acolhimento de Refugiados. O aplicativo deverá utilizar apenas HTML, CSS e JS.

No meu projeto, usei JavaScript para acionar um alerta no formulário de cadastro na newsletter, que fica no footer.

Caso a pessoa deixa o espaço de nome e e-mail em branco, ela recebe um alerta informando para preenche-los. Caso a pessoa preencha corretamente, ela recebe um alerta de validação.

```    
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
``` 
