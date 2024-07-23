//genrel method for implementing string
const name = 'mugdha'
const name2 = 'choudhary'
// console.log(name + name2);

// new method
console.log(`hello everyone my name is ${name} and my surname is ${name2}. `);
//string declaration by creating a String object
const accName = new String (`Mugdha`)
console.log(accName[2]);
console.log(accName.length);
console.log(accName.toLowerCase());
console.log(accName.charAt(3));
console.log(accName.indexOf('m'));
//store this string into a new variable

const newStr = accName.substring(0,3);
console.log(newStr);

const str2= "    mugdha   "
console.log(str2.trim());

const url = "https://mugdhachy.com/mugdha%100choudhary"

console.log(url.replace('%100','%200'))
console.log(url.includes('sundar'))//check whether sundar exist or not 


