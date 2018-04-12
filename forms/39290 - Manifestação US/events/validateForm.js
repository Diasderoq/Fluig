function validateForm(form){
	//Valida todos os campos da aba Etapa Unidade
	if (form.getValue ("ZoMedico") == "" || form.getValue ("ZoMedico") == null){
		throw ("Nome Do Médico é obrigatorio")
	}
	if (form.getValue ("NomePaciente") == "" || form.getValue ("NomePaciente") == null){
		throw ("Nome Paciente é obrigatorio")
	}
	
	if (form.getValue ("DataDoExame") == "" || form.getValue ("DataDoExame") == null){
		throw ("Data do Exame é obrigatorio")
	}
	if (form.getValue ("PeriodoDoExame") == "0" || form.getValue ("PeriodoDoExame") == "" ){
		throw ("Período do Exame é obrigatorio")
	}
	if (form.getValue ("MatriculaPaciente") == "" || form.getValue ("MatriculaPaciente") == null){
		throw ("Matrícula Paciente é obrigatorio")
	}
	if (form.getValue ("TipoDeManifestacao") == "0" || form.getValue ("TipoDeManifestacao") == ""){
		throw ("Tipo de Manifestação é obrigatorio")
	}
	if (form.getValue ("ZoExameRealizado") == "" || form.getValue ("ZoExameRealizado") == null){
		throw ("Exame Realizado é obrigatorio")
	}
	if (form.getValue ("ZoUnidade") == "" || form.getValue ("ZoUnidade") == null){
		throw ("Unidade é obrigatorio")
	}
	if (form.getValue ("Solicitante") == "" || form.getValue ("Solicitante") == null){
		throw ("Solicitante é obrigatorio")
	}
	if (form.getValue ("ZoGerenciaMedica") == "" || form.getValue ("ZoGerenciaMedica") == null){
		throw ("Gerência Médica é obrigatorio")
	}
	
	if (form.getValue ("TipoDeManifestacao") == "Conduta" &&  form.getValue ("RelatoDoAuxDeSala") == ""){
		throw ("Relato do Aux. De Sala é obrigatorio")
	}
	
	
	
}