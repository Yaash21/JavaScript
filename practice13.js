var myObj = [5, [22], [[14]], [[4]],[5,6]];
var output= myObj.toString();
var output=output.split(',').map(Number);
console.log(output);
