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
// const regexp =  /the/gi
// console.log(str.match(regexp))

// const regexp =  /fox/gi
// console.log(regexp.test(str)) 
// console.log(str.replace(regexp, 'AAA')) 
// str = str.replace(regexp, 'AAA')
// replace 때 let 은 재할당이 가능하고 const는 불가능함?
// console.log(str)

const regexp =  /the/g
console.log(str.match(regexp))


