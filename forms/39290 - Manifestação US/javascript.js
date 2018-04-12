//Functions em tempo de exe
$(document).ready(function() {

	//Montando a Data de Hoje
	var dataAtual = new Date();
	var txtData = (dataAtual.getDate()<10?"0"+dataAtual.getDate():dataAtual.getDate()) + "/" + ((dataAtual.getMonth()+1)<10?"0"+(dataAtual.getMonth()+1):(dataAtual.getMonth()+1)) + "/" + dataAtual.getFullYear();
	//Chamando o componente de calendario fluig e atribuindo no campo do formulario
	var mySimpleCalendar = FLUIGC.calendar('#DataDoExame',{
	//Atribuindo a Data Criada como data Maxima de Abertura do Calendario
		maxDate: txtData,
	})
	//Quando o  Tipo de Manifestação for consulta, abilita o campo  Relato do Aux. De Sala e o mesmo é Obrigatorio
	$('#TipoDeManifestacao').on('change', function() {
		if ($('#TipoDeManifestacao').val() == "Conduta"){
		$("#div_relato").show();	
		}else $("#div_relato").hide();
			
		}
	);	
	//
	$('#ContatoPacientesim').on('change', function() {
		if ($('#ContatoPacientesim').prop("checked",true)){
			$("#ContatoPacientetxt").show();
		}  else if($('#ContatoPacientenao').prop("checked",true)){
			$("#ContatoPacientetxt").hide();
			
		}
				
	});



	//Validando conteudo dos campos e alterando a cor
	/*-----------------------------------------------*/
	//Nome Do Médico
	/*
	Quando o elemento é do tipo zoom a alteração de cor 
	fica no evento de setSelectedZoomItem e removedZoomItem
	*/
	//Matrícula Paciente
	$('#MatriculaPaciente').on('change', function() {
		if ($('#MatriculaPaciente').val() != ""){
			$("#4").removeClass("has-error");
			$("#4").addClass("has-success");
		}  else {
			$("#4").addClass("has-error");
			$("#4").removeClass("has-success");
		}
	});
	//Nome Paciente 
	$('#NomePaciente').on('change', function() {
		if ($('#NomePaciente').val() != ""){
			$("#30").removeClass("has-error");
			$("#30").addClass("has-success");
		}  else {
			$("#30").addClass("has-error");
			$("#30").removeClass("has-success");
		}
	});
	//Tipo de Manifestação
	$('#TipoDeManifestacao').on('change', function() {
		if ($('#TipoDeManifestacao').val() != "0"){
			$("#div_TipoDeManifestacao").removeClass("has-error");
			$("#div_TipoDeManifestacao").addClass("has-success");
		}  else {
			$("#div_TipoDeManifestacao").addClass("has-error");
			$("#div_TipoDeManifestacao").removeClass("has-success");
		}
	});
	//Período do Exame
	$('#PeriodoDoExame').on('change', function() {
		if ($('#PeriodoDoExame').val() != "0"){
			$("#3").removeClass("has-error");
			$("#3").addClass("has-success");
		}  else {
			$("#3").addClass("has-error");
			$("#3").removeClass("has-success");
		}
	});
	//Exame Realizado
	/*
	Quando o elemento é do tipo zoom a alteração de cor 
	fica no evento de setSelectedZoomItem e removedZoomItem
	*/
	//Unidade
	/*
	Quando o elemento é do tipo zoom a alteração de cor 
	fica no evento de setSelectedZoomItem e removedZoomItem
	*/
	//Data do Exame
	$('#DataDoExame').on('change', function() {
		if ($('#DataDoExame').val() != ""){
			$("#2").removeClass("has-error");
			$("#2").addClass("has-success");
		}  else {
			$("#2").addClass("has-error");
			$("#2").removeClass("has-success");
		}
	});
	//Solicitante
	$('#Solicitante').on('change', function() {
		if ($('#Solicitante').val() != ""){
			$("#div_Solicitante").removeClass("has-error");
			$("#div_Solicitante").addClass("has-success");
		}  else {
			$("#div_Solicitante").addClass("has-error");
			$("#div_Solicitante").removeClass("has-success");
		}
	});
	//Gerência Médica 
	/*
	Quando o elemento é do tipo zoom a alteração de cor 
	fica no evento de setSelectedZoomItem e removedZoomItem
	*/
	//Relato do Aux. De Sala
	$('#RelatoDoAuxDeSala').on('change', function() {
		if ($('#RelatoDoAuxDeSala').val() != ""){
			$("#div_relato_aux").removeClass("has-error");
			$("#div_relato_aux").addClass("has-success");
		}  else {
			$("#div_relato_aux").addClass("has-error");
			$("#div_relato_aux").removeClass("has-success");
		}
	});


	/***************************************************/

	
	
	
});




function addcomplemento(tablename) {
	row = wdkAddChild(tablename);

}


function complemento(obj){
	var table = document.getElementById('tbaddlinha');
	var linhas = table.getElementsByTagName('tr');
	var teste = document.getElementById('Atividades1').value;
	var idx = obj.id.split('___');
	var usuario = ''
	var usuarioid = document.getElementById('UsuarioAtividadeName').value;	
		
	
	
	var dataAtual = new Date();
	var txtData = (dataAtual.getDate()<10?"0"+dataAtual.getDate():dataAtual.getDate()) + "/" + ((dataAtual.getMonth()+1)<10?"0"+(dataAtual.getMonth()+1):(dataAtual.getMonth()+1)) + "/" + dataAtual.getFullYear();
	var txtHora = dataAtual.getHours() + ":" + dataAtual.getMinutes();
	
	
	
	var rowLength = table.rows.length;
	
	for(var i=0; i<rowLength; i++){
		var row = [i];

		
		if($("#Complemento___" + [i]).val() == '' && $("#DataDoComplemento___" + [i]).val() == '' && $("#NomeDoUsuario___" + [i]).val() == ''){
			
			$("#Complemento___" + [i]).val(teste);
			$("#DataDoComplemento___" + [i]).val(txtData + " " + txtHora);
			$("#NomeDoUsuario___" + [i]).val(usuarioid);
			document.getElementById('Atividades1').value = '';
			
		}
		  
		 
	}  
	
	/*//var indexes = 0;
	 $('table tr').each(function(){
	      var context = $(this);
	      var arr = context.attr('id').split('___');
	      indexes = arr[1]; 
	     });   
	     
	 
	 alert(arr)
	     $("#nm_title___" + indexes).val(event.title);
	     $("#nm_start___" + indexes).val(eventStart);
	     $("#nm_end___" + indexes).val(eventEnd);
	     $("#nm_color___" + indexes).val(event.color);
	     $("#nm_textColor___" + indexes).val(event.textColor);
	
	
	
	*/
	
	
	
	//alert($('#NomeDoUsuario___1').val)
	//alert(row);
	
	
	/*if (linhas.length > 2){
		
		for(var i=2; linhas.length > i; i++){
			
			
			
			var arrayInput = linhas[i].getElementsByTagName("input");

			// var array =   arrayInput[0].getElementById('NomeDoUsuario')   
			
			
			
			arrayInput[0].value  = teste
			
			alert(arrayInput[0])

		}
		
	}*/
	
}


function setSelectedZoomItem(selectedItem) {

	var NomeMedico = "NomeMedico";
	var IDGestor = "IDGestor";
	var ZoUnidade = "ZoUnidade";
	var ZoMedico = "ZoMedico";
	var ZoExameRealizado = "ZoExameRealizado";
	var ZoGerenciaMedica = "ZoGerenciaMedica";

	if(selectedItem.inputId == ZoUnidade ){
		$("#7").removeClass("has-error");
		$("#7").addClass("has-success");
	}
	if(selectedItem.inputId == ZoMedico ){
		$("#1").removeClass("has-error");
		$("#1").addClass("has-success");
	}
	if(selectedItem.inputId == ZoExameRealizado ){
		$("#6").removeClass("has-error");
		$("#6").addClass("has-success");
	}
	if(selectedItem.inputId == ZoGerenciaMedica ){
		$("#div_ZoGerenciaMedica").removeClass("has-error");
		$("#div_ZoGerenciaMedica").addClass("has-success");
	}




/*

	if (selectedItem.inputId == TxtAprovador) {
		var c0 = selectedItem["NomeMedico"]
		var c1 = DatasetFactory.createConstraint("NomeMedico", c0, c0, ConstraintType.MUST);
		var constraints   = new Array(c1)
		var dataset = DatasetFactory.getDataset("GerentesMedicos",fields,constraints,null); 
		


		$('#' + IDGestor).val(dataset.values[0].ID)
		

	}  */
}

function removedZoomItem(removedItem) {
	//Atribuindo lets
	var ZoUnidade = "ZoUnidade";
	var ZoMedico = "ZoMedico";
	var ZoExameRealizado = "ZoExameRealizado";
	var ZoGerenciaMedica = "ZoGerenciaMedica";
	

	if (removedItem.inputId === ZoUnidade) {
		$("#7").addClass("has-error");
		$("#7").removeClass("has-success");
	} 
	if (removedItem.inputId === ZoMedico) {
		$("#1").addClass("has-error");
		$("#1").removeClass("has-success");
	} 
	if (removedItem.inputId === ZoExameRealizado) {
		$("#6").addClass("has-error");
		$("#6").removeClass("has-success");
	} 
	if (removedItem.inputId === ZoGerenciaMedica) {
		$("#div_ZoGerenciaMedica").addClass("has-error");
		$("#div_ZoGerenciaMedica").removeClass("has-success");
	} 
}
