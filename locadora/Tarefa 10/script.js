function validaForm(){

	let validaDat = document.forms["cadastrar"]["data"].value;
	let validaNom = document.forms["cadastrar"]["nome"].value;
	let validaEma = document.forms["cadastrar"]["email"].value;


	
	if (validaDat == ""){
		alert("A data deve ser preenchida!")
		return false;
	}
	if (validaNom == ""){
		alert("O nome deve ser preenchido!")
		return false;
	}
	if (validaEma == ""){
		alert("O email deve ser preenchido!")
		return false;
	}

}

function insere(){

	let dat = document.forms["cadastrar"]["data"].value;
	let nom = document.forms["cadastrar"]["nome"].value;
	let ema = document.forms["cadastrar"]["email"].value;


	let inserir = window.document.getElementById("inserirTabela");
	inserir.innerHTML += 
		`<tr>				
		<td>${nom}</td>
		<td>${ema}</td>
		<td>${dat}</td>
		</tr>`;
}