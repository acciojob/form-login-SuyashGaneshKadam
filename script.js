function getFormvalue() {
    //Write your code here
	let elements = document.querySelectorAll("#form1>input");
	alert(elements[0].value +  " " + elements[1].value);
}
