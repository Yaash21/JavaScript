arr=[1,6,2,4,4,5,5,7,8];
function f(arr){
 arr.sort((a,b)=>a-b);
function fu(arr){
	var i=0;
	for(i=0;i<arr.length-1;i++){
		if(arr[i]==arr[i+1]){
		arr.splice(i+1,1);
		}
	}
}
fu(arr);
}

console.log(arr);
//f1(arr);
