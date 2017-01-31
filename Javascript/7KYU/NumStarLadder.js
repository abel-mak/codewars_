/*

Using n as a parameter in the function pattern, where n should be a natural
number, complete the codes to get the pattern (take the help of examples):

Note: There is no newline in the end (after the pattern ends)

Examples

pattern(3) should return `"1\n12\n1*3", e.g. the following:

1
1*2
1**3
pattern(10): should return the following:

1
1*2
1**3
1***4
1****5
1*****6
1******7
1*******8
1********9
1*********10
Note that there shouldn't be any trailing newlines.

*/
// My Solution
function pattern(n){
 var output="1\n";
  for (x=1; x <n; x++) {
    output += "1";
    for (y=1; y <= x; y++) {output += "*"}
    output += x+1 + "\n";
  }
 return output.substring(0, output.length-1);
}

// Better Solution
function pattern(n){
 let arr = [...Array(n).keys()];
 return arr.map((v, i) => i > 0? '*'.repeat(i) + (i + 1): i + 1).join('\n1');
}
