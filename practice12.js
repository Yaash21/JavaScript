var input= "gmail,coom"
var arr=Array.from(input);
	console.log(arr);
	var letter="m"
	function f(){
		var count=0;
		for (i=0;i<arr.length;i++){
			if(input[i]==letter)
				count++;
		}
		return count;
	}
	console.log(f(arr));
