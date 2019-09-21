function decrypt(word) {
  let string = '';
  for (let i = 0; i< word.length; i++) {
    let c = word[i];
    let prevIdx = i-1;
    let d = decryptChar(c, word, i, prevIdx);
    string = string.concat(d);
  }
  
  return string;
}

function decryptChar(c, word, currentIdx, prevIdx){
  if (prevIdx < 0) {
    return String.fromCharCode(ascii(c)-1);
  }
  
  let d = ascii(word[currentIdx]) - ascii(word[prevIdx]);
  
  while (d < 97) {
    d = d + 26;
  }
  
  return String.fromCharCode(d);
}

function ascii(c) {
  return c.charCodeAt(c);
}

console.log(decrypt('dnotq')); //crime
console.log(decrypt('flgxswdliefy')) // encyclopedia