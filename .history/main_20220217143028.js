// console.log(123)
const str = `
010-5555-5555.
qwer@gmail.com
http://www.omdbapi.com/?i=tt3896198&apikey=5610c684&s=frozen
https://www.omdbapi.com/?i=tt3896198&apikey=5610c684&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
hewp
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

// const regexp =  /the/gi
// . 는 특정한 문자를 찾는 옵션 이기때문에 문자열 \ 입력~!!
// console.log(str.match(/\.$/gim))

// console.log(
// 	str.match(/^t/gim)
// 	)

// console.log(
// 	// str.match(/h..p/g)
// 	// str.match(/fox|dog/g)
// 	// str.match(/dog|fox/) // 뒤에 플래그 g 를 입력 안할 시 먼저찾은거 1개만 출력됨 - fox1개만
// 	// str.match(/dog|fox/)
// 	str.match(/http?/g)
// 	)
console.log(
	str.match(/\b\w{2,3}\b/g)
	)


