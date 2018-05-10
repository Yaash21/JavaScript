var today=new Date();
var month=today.getMonth();
if (month<10){
	month="0"+month;
}else{
	month=month;
}
var date=today.getDate();
if (date<10){
	date="0"+date;
}else{
	date=date;
}
var year=today.getFullYear();
var hour=today.getHours();
var minute= today.getMinutes();
var seconds=today.getSeconds();

console.log(hour+":"+minute+":"+seconds+" "+""+month+"/"+date+"/"+year);