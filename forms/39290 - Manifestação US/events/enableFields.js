function enableFields(form){
	var indexes = form.getChildrenIndexes("tbaddlinha");
	var sequenceId = getValue("WKNumState");
	
	
	
	if(sequenceId == '4'){
	
		form.setEnabled("ZoMedico", false);
		form.setEnabled("DataDoExame", false);
		form.setEnabled("PeriodoDoExame", false);
		form.setEnabled("MatriculaPaciente", false);
		form.setEnabled("TipoDeManifestacao", false);
		form.setEnabled("ZoExameRealizado", false);
		form.setEnabled("ZoUnidade", false);
		form.setEnabled("Solicitante", false);
		form.setEnabled("ZoGerenciaMedica", false);
		form.setEnabled("NomePaciente", false);
		if(form.getValue ("TipoDeManifestacao") == "Conduta"){
			
			form.setEnabled("RelatoDoAuxDeSala", false);
		}
	        	
	}
		
	
}