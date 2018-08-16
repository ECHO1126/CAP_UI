
function writetotextarea() 
{
	var HasVpr = document.getElementById("HasVpr").value;
	var HasDrp = document.getElementById("HasDrp").value;
	var HasLid = document.getElementById("HasLid").value;
	var DelTime = document.getElementById("DelTime").value;
	var TolStep = document.getElementById("TolStep").value;
	
	var returnVal = document.getElementById("inicondition");
	returnVal.value="HasVpr:"+HasVpr;
	returnVal.value+="\n"+"HasDrp:"+HasDrp;
	returnVal.value+="\n"+"HasLid:"+HasLid;
	returnVal.value+="\n"+"DelTime:"+DelTime;
	returnVal.value+="\n"+"TolStep:"+TolStep;
}

function WriteResult() 
{
	returnVal = document.getElementById("inicondition").value;
	
		var w=window.open('Result.html');   
		w.document.write(returnVal);
	
	alert(returnVal);
}