// console.log(123)
const str = `
010-5555-5555
qwer@gmail.com
http://www.omdbapi.com/?i=tt3896198&apikey=5610c684&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`
// 생성자 방식으로 작성 -  g 플래그를 인수에 적용 , i 는 대소문자 구분없게..
// const regexp = new RegExp('the', 'gi');

// 리터럴 방식으로 작성
const regexp =  /the/gi
console.log(str.match(regexp))
