let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format
function productsum(n){
 // n= parseInt(readLine)
  let p = 1
  let s =0
  while(n>0){
    let  r=n%10
     p *= r
     s += r
     n = parseInt(n/10)
  }
  return(p-s)
}
let a = productsum(parseInt(readLine()))
console.log(a)






/*let n = parseInt(readLine());
let p = 1;
let s = 0;
while(n>0){
	let a = n%10;
      p = p*a;
      s = s+ a ;
      n = parseInt(n/10);
    }
console.log(p-s);*/