function convertToRoman(num) {
  	const obj = {
      0:['M',1000], 
      1:['D', 500], 
      2:['C', 100], 
      3:['L', 50], 
      4:['X', 10], 
      5:['V', 5], 
      6:['I', 1]
    };
let result='';
  //your code here
if(num>1000){
   num-1000;
	result+='M';
}else if(num>500 && num<999){
    num-500;
	result +='D'
}else if(num>100 && num<500){
    num-100;
	result +='C'
}else if(num>50 && num<100){
    num-50;
	result +='L'
}else if(num>10 && num<50){
    num-10;
	result +='X'
}else if(num>5 && num<10){
    num-5;
	result +='V'
}else if(num>1 && num<5){
    num-1;
	result +='I'
}
return result;
}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
