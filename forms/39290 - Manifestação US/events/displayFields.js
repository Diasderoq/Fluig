function displayFields(form,customHTML){
	form.setHideDeleteButton(true);
	var sequenceId = getValue("WKNumState");
	var indexes = form.getChildrenIndexes("tbaddlinha");
	
	
	
	customHTML.append("<script>");
	customHTML.append("$('#Atividades').hide();");
	//customHTML.append("$('#RespostaFormal').hide();");
	customHTML.append("$('#div_relato').hide();");
	customHTML.append("$('#Div_RespotaFormalUnidade').hide();");
	customHTML.append("</script>");
	
	
	
	for (var i = 0; i < indexes.length; i++) {
		
		
		if (form.getValue ("Atividades") != ""){
			
			form.setValue ("NomeDoUsuario___" +  indexes[i],'teste')
			
		}		
		
	}
	
	
	
	/*if(form.getValue ("TipoDeManifestacao") == "Conduta" || sequenceId == "4"){
		
		customHTML.append("<script>");
		customHTML.append("$('#RelatoDoAuxDeSala').show();");
		customHTML.append("</script>");
	}
	*/
	
	
	if(sequenceId == "8"){
		
		
		customHTML.append("<script>");
		customHTML.append("$('#EtapaUnidade').show();");
		customHTML.append("$('#div_relato').show();");
		customHTML.append("$('#Div_RespotaFormalUnidade').show();");
		customHTML.append("$('#Atividades').show();");
		customHTML.append("$('#Atividades').show();");
		customHTML.append("$('#RespostaFormal').show();");
		customHTML.append("$('#div_relato').show();");
		customHTML.append("$('#Div_RespotaFormalUnidade').show();");
		customHTML.append("$('#RelatoDoAuxDeSala').show();");
		
		customHTML.append("$('#div_TipoDeManifestacao').hide();");
		customHTML.append("$('#div_Solicitante').hide();");
		customHTML.append("$('#div_ZoGerenciaMedica').hide();");
		//customHTML.append("$('#div_relato').hide();");
		customHTML.append("$('#div_tab').hide();");
		
		customHTML.append("</script>");
		
	}
	
	if(sequenceId == "4"){
		
		customHTML.append("<script>");
		customHTML.append("$('#Atividades').show();");
		customHTML.append("$('#Div_RespotaFormalUnidade').show();");
		
		customHTML.append("</script>");
		
		
		if(form.getValue ("TipoDeManifestacao") == "Conduta"){
    		
			customHTML.append("<script>");
			customHTML.append("$('#div_relato').show();");
			customHTML.append("</script>");
    	}
		
	}
		
}