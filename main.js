//signup and login(adding user data to localstorage);
function signUp() {
	var userName = $("#userName").val();
	var email = $("#email").val();
	var age = $("#age").val();
	var passWord = $("#passWord").val();
	var passWord1 = $("#passWord1").val();
	if(passWord === passWord1){
	localStorage.setItem("userName", Json.stringify(userName));
	localStorage.setItem("email", Json.stringify(email));
	localStorage.setItem("age", Json.stringify(age));
	localStorage.setItem("passWord", Json.stringify(passWord));
    localStorage.setItem("passWord1", Json.stringify(passWord1));
}
else {
	alert("The re-entered passWord doesn't match! Try Again :)")
}
};

var passWordlength = (localStorage.getItem("passWord").length) - 1;
var passWord1length = (localStorage.getItem("passWord1").length) - 1;
var localpassword = localStorage.getItem("passWord").substring(1,passWordlength);
var localpassword1 = localStorage.getItem("passWord1").substring(1,passWord1length);
var userNamelength = (localStorage.getItem("userName").length) - 1;
var localuserName = localStorage.getItem("userName").substring(1,userNamelength); 


function login(){
	var entereduser = $("#newUserName").val();
	var enteredpass = $("#newPass").val();
if(entereduser === localuserName && enteredpass === localpassword){
	location.replace("link")
}
else if (entereduser === localuserName && enteredpass !== localpassword) {
	alert("Your PassWord Is Wrong, Try Again.")
}
else if (entereduser !== localuserName && enteredpass === localpassword) {
	alert("Your userName is Wrong, Try Again.")
}
else {
	alert("Please Try to SignUp first :)")
}
};

//adding image to localstorage;
var userimage = $("#userimage").val();

userimage.addEventListener("load", function(){
	var imageCanvas = document.createElement("canvas");
	var imageContext = imagecanvas.getContext("2d")	;
	imageCanvas.width = userimage.width;
	imageCanvas.height = userimage.height;
	imageContext.drawImage(elephant, 0, 0, userimage.width, userimage.height);
	var imageToUrl = imageCanvas.toDataUrl("image/png");
	try {
		localstorage.setItem("userimage", imageToUrl);
	} 
	catch(error){
		alert(error);
	}

});

