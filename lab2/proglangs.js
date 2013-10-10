


var element_unordered_list = document.getElementById("liste");


function skrivTilUtdataBoks(valgtobj){
	var e_spraak = document.getElementById("spraak"); 
	
	var e_utdataboks = document.getElementById("utdataboks"); 
	
	e_utdataboks.innerHTML = "Du har valgt programmeringsspråket " + e_spraak.options[valgtobj.selectedIndex].text; 
}

function popupboks(beskjed){
	alert("Under konstruksjon")
}