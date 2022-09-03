//TitleCase
let str =document.getElementById("enterString")
let btntitle =document.getElementById("btn-title")
let showString =document.getElementById("showString")

function titleCase() {
	let titleString = str.value
	.toLowerCase()
	  .split(" ")
	  .map(val => val.replace(val.charAt(0), val.charAt(0).toUpperCase()))
	  .join(" ");

	  showString.innerHTML = titleString
  }
  
 btntitle.addEventListener("click", titleCase)


