function showDescription(descript) {
	$("#description").html("Description: " + descript);
}

function hideDescription(){
	$("#description").html(" ");
}

function validate(){
	console.log("hello");
	var txtDob = $("#txtDate").val();
	var dob = new Date(txtDob);
	if (dob >= new Date()){
		alert("Date of Bith is not valid. Date has to be before today");
		return false
	}
	var txtPhone = $("#phone").val();
	if ((isNaN(txtPhone) == true) || (txtPhone.trim.length != 10)) {
		alert("Phone number is not valid or not in a valid format..");
		return false;
	}
	// if (txtPhone.length != 10) {
	// 	alert("Phone number is not valid or not in a valid format.");
	// 	return false;
	// }


}