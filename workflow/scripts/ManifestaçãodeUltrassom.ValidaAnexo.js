function ValidaAnexo(){
	
	var docs = hAPI.listAttachments();
	log.info("[validarAnexo] docs.size:" + docs.size());
	if(docs.size() < 2  ){
		throw " Favor Anexar laudo e foto do exame";
	}
	return false;
}