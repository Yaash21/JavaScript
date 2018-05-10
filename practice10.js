var student = [{name: "david", marks:80 },
				{name:"Vinoth" ,marks:77},
				{name:" Divya", marks:88}, 
				{name:"Ishitha", marks:95},
			{name: "Thomas", marks: 68}];


function getSum(student){
	var sum=0;
	for(i=0;i<student.length;i++){
		sum+=student[i].marks;
	}
return sum/student.length;
}
console.log(getSum(student));

if(getSum(student)<60){
	console.log("The  Grade is F");
}else if(getSum(student)<70){
	console.log("The  Grade is D");
}else if
(getSum(student)<80){
	console.log("The  Grade is C");
}else if
(getSum(student)<90){
	console.log("The  Grade is B");
}else if
(getSum(student) < 100){
	console.log("The  Grade is A");}
	


