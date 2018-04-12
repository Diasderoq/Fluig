/*
 
 function afterProcessCreate(processId){
	

	var currentUser = getValue("WKUser");
	
		
	hAPI.setCardValue("Requerente",currentUser);
	
	
	var nomeSolicitante = hAPI.getCardValue("nomeSolicitante");
	var numeroSolicitacao = hAPI.getCardValue("numeroSolicitacao");
	var RespostaFormal = hAPI.getCardValue("RespostaFormal");
	
	
	try{
			log.info('*** Teste de Email: try');
		   //Monta mapa com parâmetros do template
		   var parametros = new java.util.HashMap();
		   parametros.put("nomeSolicitante", nomeSolicitante);
		   parametros.put("numeroSolicitacao", numeroSolicitacao);
		   parametros.put("Resposta_formal", RespostaFormal);
		
		   //Este parâmetro é obrigatório e representa o assunto do e-mail
		    parametros.put("subject", "Manifestação de Ultrassom: " + numeroSolicitacao );
		    
		    var destinatarios = new java.util.ArrayList();
		    
		    destinatarios.add("93350");
		    

		    log.info('*** Teste de Email Destinatarios 1: ' + destinatarios);
		    
		    //Envia e-mail
		    notifier.notify("93350", "tlp_manifestacao_us", parametros, destinatarios, "text/html");
		    
		    log.info('*** Teste de Email FIM ');
		    
		
	}catch(e){
		log.info('*** Teste de Email catch: ');
		
//		   log.info(e);
		  
		}
	
	
	
	
	
}
*/