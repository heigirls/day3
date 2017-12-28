function name(num) {
   var str = num.slice(0, 10);
   str+=num.slice(10, 14 ).toUpperCase() + "****";
   return str;
}
console.log(name('142727199502080525'));