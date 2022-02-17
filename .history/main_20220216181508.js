// console.log(123)
const str = `
010-5555-5555
qwer@gmail.com
http://www.omdbapi.com/?i=tt3896198&apikey=5610c684&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`
 // g 플래그를 인수에 적용 
const regexp = new RegExp('the', 'g');
console.log(str.match(regexp))
