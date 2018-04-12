function afterStateLeave(sequenceId){
	
	var proximaAtividade = getValue("WKNextState");
	var Atividadeatual = getValue("WKNumState");
	var atividade = getValue("WKNumState");
	
	hAPI.setCardValue("AtivAtual",Atividadeatual);
    hAPI.setCardValue("AtivDest",proximaAtividade);
    
    
    
	
	
}