function validar() {
    var inpObj = document.getElementById("mail");
    if (inpObj.value.length > 8 ) {
      console.log(inpObj.value);
      localStorage.setItem("logado", true);
    }else{
      document.getElementById("errou").innerHTML = inpObj.validationMessage;
    }

}
function verifica(){
console.log(localStorage.getItem("logado"));

var teste = document.getElementById("main");
  if(localStorage.getItem("logado") == 'true'){
    console.log('logado');
    document.getElementById("main").style.display = "none";
    document.getElementById('logado-msg').hidden = false;
    document.getElementById('logado-button').hidden = false;
  }
}
function logoff(){
  if(localStorage.getItem("logado") == 'true'){
    localStorage.setItem("logado", false);
    document.getElementById("main").style.display = "initial";
    document.getElementById('logado-msg').hidden = true;
    document.getElementById('logado-button').hidden = true;
  }

}
