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
let N = readLine().split(" ");
let A = parseInt(N[0]);
let B = parseInt(N[1]);
{
for(let C=1; C<=3; C++)
{
 let d = A*B*C;
 if((d%2) != 0){
 console.log("yes");
 break;
}
 else {
   console.log("no");
 }
 }
}
