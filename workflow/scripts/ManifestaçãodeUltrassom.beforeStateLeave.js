function beforeStateLeave(sequenceId){
	
	
	
	
			
			var numSolic = getValue("WKNumDocument");
			var matriculaUsuario = getValue("WKUser");
			var c1 = DatasetFactory.createConstraint("colleaguePK.colleagueId", matriculaUsuario, matriculaUsuario, ConstraintType.MUST);
			var dsUsuario = DatasetFactory.getDataset("colleague", ["colleagueName"], [c1],null);
			var nomeUsuario = dsUsuario.getValue(0,"colleagueName");
			var usuario = nomeUsuario;
			
			
			
			hAPI.setCardValue("nomeSolicitante",usuario);
			hAPI.setCardValue("numeroSolicitacao",numSolic);
	
}