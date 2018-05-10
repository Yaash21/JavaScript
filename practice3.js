function main(){
function checkEven(num){
	if (num%2==0){
		return true;
	}else{
		return false;
	}

}
var a= document.getElementById("input").value;
var b= a.toString();
b=Array.from(b);

function f(b){
for (i=0;i<b.length-1;i++){
	if (checkEven(parseInt(b[i])) && checkEven(parseInt(b[i+1])))
	{b.splice(i+1,0,'-');
	
	}
}
document.write(123);
}
f(b);
document.getElementById("demo").innerHTML= b.join("");
}
