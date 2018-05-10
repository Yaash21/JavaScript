arr1=[1,2,3,4,6,7,8];
arr2=[2,4,5,6,1,5,6];
var arr3=[];
function diff(arr1,arr2){
	var i=0;
	if(arr1.length==arr2.length){
	
	for(i=0;i<arr1.length;i++){
		
		arr3[i] = arr1[i] - arr2[i];
	}
	console.log(arr3);
	}else{
		console.log("Incorrect Input");
	}
}
diff(arr1,arr2);