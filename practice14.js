var myObj = [{'name':'Saurabh', 'age': 30, 'occupation': "Team Leader"}, 
{'name':'Anupriya', 'age': 32, 'occupation': "Team Leader"}, 
{'name':'Kalyani', 'age': 25, 'occupation': "Programmer"}, 
{'name':'Damodaran', 'age': 27, 'occupation': "Programmer"}, 
{'name':'Krishnakath', 'age': 22, 'occupation': "Programmer"}, 
{'name':'Venketraman', 'age': 28, 'occupation': "Programmer"}];

// var filt=myObj.filter(myObj=>myObj.occupation="Programmer");
// console.log(filt);

var age=myObj.sort(function f(a,b){
		return b.age-a.age;
});
console.log(age);
// var occup={};
// var obj= function(){
// 	var i=0;
// 	for( var i of myObj){
// 		occup[i.occupation]=[];
// 	}
// return occup;};
// var key= obj(occup);

// 	function f(key){
// 		for (i=0;i<Object.keys(key).length;i++){
// 			var sub=[];
// 			for(j=0;j<myObj.length;j++){
// 				if(Object.keys(key)[i]==myObj[j].occupation){
// 					var obj1={};
// 					obj1.name=myObj[j].name;
// 					obj1.age=myObj[j].age;
// 					sub.push(obj1);
// 				}
				
// 			}
// 			key[Object.keys(key)[i]]=sub;
// 		}
// 		return key;
// 	}

// console.log(f(key));

// // var name=myObj.map(x=>x.name);
// // console.log(name);