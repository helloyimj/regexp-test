// console.log(123)
const str = `
010-5555-5555.
qwer@gmail.com
http://www.omdbapi.com/?i=tt3896198&apikey=5610c684&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
http://localhost:1234
동해물과_백두산이 마르고 닳도록
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

// console.log(
// 	str.match(/\b\w{2,3}\b/g)
// 	//숫자나 알파벳 문자가 2글자에서 3글자 사이의 단어들만 추려서 출력 -  패턴내의 연속일치를 확인??
// 	)

// console.log(
// 	str.match(/[가-힣]{1,}/g)
// 	)
const h = `  the hello  world  !

`
// console.log(
// 	// str.match(/\bf\w{1,}\b/g)
// 	//f 로 시작하는 알파벳 전부 반환
// 	h.replace(/\s/g,'')
// 	// h의 공백을 전부 찾은다음 빈값 삽입 - 엔터포함한 공백삭제
// 	)


	const strr = `
	010-5555-5555
	qwer@gmail.com
	http://www.omdbapi.com/?i=tt3896198&apikey=5610c684&s=frozen
	The quick brown fox jumps over the lazy dog.
	abbcccdddd
	`

	console.log(
		strr.match(/.{1,}(?=@)/g)
	)
