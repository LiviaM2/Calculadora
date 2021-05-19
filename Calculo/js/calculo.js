

function insert(num){
	var numero = document.getElementById('digitos').innerHTML;//se colocar o innerHTML = num ele vai pegar cada numero colocado no html.UM de cada vez
		document.getElementById('digitos').innerHTML = numero + num;//Aqui ele pega o numero que ja tinha e coloca mais.

}


function apagar(){
	document.getElementById('digitos').innerHTML = "";//vazio apaga tudo
}

function voltar(){
	 var digitos = document.getElementById('digitos').innerHTML;
	 document.getElementById('digitos').innerHTML = digitos.substring(0, digitos.length - 1);
}

function resultado(){

	  var digitos = document.getElementById('digitos').innerHTML;
	  if (digitos) {
	  	document.getElementById('digitos').innerHTML = eval(digitos);
	  }else{
	  	document.getElementById('digitos').innerHTML = "Nada...";
	  }
}