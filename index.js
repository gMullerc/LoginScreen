let evento = document.querySelector(".btnInsert").addEventListener("click", function(event)
{

    event.preventDefault();
    verifValue();
});
let registro = document.querySelector(".registro").addEventListener('click', function(){
    signinScreen();
});

function getValues(){

    let userSave = document.querySelector("#text-name");
    let senhaSave = document.querySelector("#text-pass");

    user = userSave.value;
    senha = senhaSave.value;
    

}
function verifValue(){
    let nameOrig = "Gui"
    let senhaOrig = "10"
    getValues();
    if(user == nameOrig && senha == senhaOrig){
        window.location.href = "#";
    }else{
        alert("Usuário ou senha incorreta");
    }
}


function signinScreen(){
    let adicionaClasse = document.querySelector(".signin-screen");

    adicionaClasse.classList.add('signin-screen-active');
    adicionaClasse.classList.remove('signin-screen');
    
    
    let removeClasse = document.querySelector(".login-screen");
    removeClasse.classList.add('login-screen-active');
    removeClasse.classList.remove('login-screen');
}
/*function loginScreen(){

    let adicionaClasse = document.querySelector(".signin-screen");

    adicionaClasse.classList.add('signin-screen');
    adicionaClasse.classList.remove('signin-screen-active');
    
    let removeClasse = document.querySelector(".login-screen");
    removeClasse.classList.add('login-screen');
    removeClasse.classList.remove('login-screen-active');
}*/




