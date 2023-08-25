function decode(s)
{
  let end = s.indexOf( "]", 0 );
  
  if (end === (-1)) return s;
  
  let bracketsVal = s.slice(0, end);
  let start = bracketsVal.lastIndexOf( "[" );
  
  bracketsVal = s.slice(start+1, end)
  
//////////////////////////////////////////////////////////////////////////////////
  let num  = ""; 
  let numStart = ""

  let index = 1;
  while ( !isNaN(Number(s[start-index])) ) 
    {
      num = s[start-index] + num;
      numStart = start-index;
      index++;
    }
//////////////////////////////////////////////////////////////////////////////////
  
  let result = "";
  for (let i=0; i<num; i++) 
    {
      result += bracketsVal;
    }
  
  let newStart = s.slice( 0, numStart );
  let newEnd = s.slice( end+1 );
  
  let newS = newStart + result + newEnd;
  
  return decode(newS);
}

const t = "23a"
console.log(decode(t));

const s = "c2[a]3[b]c";
console.log(decode(s));

const g = "3[b15[a]]"
console.log(decode(g));






