//signup and login(adding user data to localstorage);
var result = []
function signUp() {
	var userName = $("#userName").val();
	var email = $("#email").val();
	var age = $("#age").val();
	var passWord = $("#passWord").val();
	var passWord1 = $("#passWord1").val();
	var obj = {};
	obj["userName"] = userName;
	obj["email"] = email;
	obj["age"] = age;
	obj["passWord"] = passWord;
	obj["passWord1"] = passWord1;
	result.push(obj);
	if (passWord === passWord1 && passWord !== ""){ 
		localStorage.setItem("result",JSON.stringify(result));
	location.replace("Login.html");
	alert("you are signed up");
	
}
else {
	alert("The re-entered passWord doesn't match! Try Again :)")
}

};


var newResult = JSON.parse(localStorage.getItem("result"));


function login(){
	var entereduser = $("#username").val();
	var enteredpass = $("#password").val();
	for (var i = 0 ; i < newResult.length ; i++){
if ((newResult[i]["userName"] === entereduser) && (enteredpass === newResult[i]["passWord"])){
	location.replace("file:///D:/backup/GaG-SnacK/Home.html");
	alert("you are signed in :)");
}
else if ((entereduser === newResult[i]["userName"]) && (enteredpass !== newResult[i]["passWord"])) {
	alert("Your PassWord Is Wrong, Try Again.")
}
else if ((entereduser !== newResult[i]["userName"]) && (enteredpass === newResult[i]["passWord"])) {
	alert("Your userName is Wrong, Try Again.")
}

}
};
/*
//adding image to localstorage;
var userimage = $("#userimage")

userimage.addEventListener("#btn-submit", function(){
	var imageCanvas = document.createElement("canvas");
	var imageContext = imagecanvas.getContext("2d")	;
	imageCanvas.width = userimage.width;
	imageCanvas.height = userimage.height;
	imageContext.drawImage(imageCanvas, 0, 0, userimage.width, userimage.height);
	var imageToUrl = imageCanvas.toDataUrl("image/png");
	try {
		localstorage.setItem("userimage", imageToUrl);
	} 
	catch(error){
		alert(error);
	}

});

//descriptions and comments
var postItems = [];
function post(){
var title = $(".title-input").val();
var commnt = $(".commnt-input input").val();
var userimage = $(".img-url").val();
var obj = {}
obj["title"] = title;
obj["commnt"] = commnt;
obj["userimage"] = userimage; 
post.push(obj);
localStorage.setItem("postItems",JSON.stringify(postItems));
}

var localarray = JSON.parse(localStorage.getItem("postItems"));

function showPost(){
	$(".description-input").text() = 
	$(".comment-input").text(localcomment);
	$(".img-url").text() = lo
}
// comments
function comment(){
	var comment = $("#comment").val();

}
*/