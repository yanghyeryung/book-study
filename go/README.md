# Go
- 구글이 개발
- golang이라고도 불림
- 간결한 문법과 생산성을 제공

## Go 특징
- 정적 타입, 강타입
- 컴파일 언어
- 가비지 컬렉션
- 병행성 (고루틴)
- 모듈화 및 패키지 시스템
- 빠른 컴파일 속도

## Go 설치
- https://golang.org/dl/

## Go 실행 / 빌드
```
$ go run test.go
```

```
$ go build test.go
```

## Go 변수 / 상수
- 변수는 키워드 var를 사용하여 선언
- var 키워드 + 변수명 + 변수 타입
- 선언된 변수가 사용하지 않으면 에러 
- 변수 선언시 초기값 지정하지 않으면 zero value를 할당
    - 숫자 - 0, boole - false, string = ''
- 함수 내에서는 var를 생략하고 i:=1이라고 사용 가능 
```
var a int  
var f float32 = 11.

a = 10
f 12.0

var i, j, k int
var i, j, k int = 1, 2, 3

```

- 상수는 키워드 const를 사용하여 선언
- const 키워드 + 상수명 + 상수 타입 = 상수 값
- 상수는 할당되는 값을 보고 그 타입을 추론하는 기능이 자주 사용됨
- 여러개의 상수를 묶어서 지정 가능 
- 상수값을 0부터 순차적으로 부여하기 위해서 iota라는 identifier을 사용 가능
```
const c int = 10
const s string = "Hi"

const c = 10
const s = "Hi"

const (
    Visa = "Visa"
    Master = "MasterCard"
    Amex = "American Express"
)

const (
    Apple = iota // 0
    Grape        // 1
    Orange       // 2
)
```

## Go 데이타 타입
- 기본 데이터 타입
    - 불린 타입 : bool
    - 문자열 타입 : string
    - 정수형 타입 : int int8 int16 int32 int64 uint uint8 uint16 uint32 uint64 uintptr
    - float 및 복소수 타입 : float32 float64 complex64 complex128
    - 기타 타입 : byte(unit8과 동일, 바이트 코드에 사용) rune(int32와 동일, 유티코드 코드포인트에 사용) 
- 문자열
    - 문자열 리터럴은 Back Quote(` `) 혹은 이중인용부호(" ")를 사용하여 표현
    - Back Quote(` `)안의 문자열은 별도로 해석되지 않음 (\n이 NewLine으로 해석되지 않음)
    - Back Quote(` `)안의 문자열은 복수 라인의 문자열을 표현 가능
    
```
package main
import "fmt"

func main() {
    rawLiteral := `아리랑\n
    아리랑\n
      아라리요`
     
    interLiteral := "아리랑아리랑\n아리리요"
    
    fmt.Println(rawLiteral)
    fmt.Println()
    fmt.Println(interLiteral)
}

/* 출력 */
아리랑\n
아리랑\n
  아리리요
   
아리랑아리랑
아리리요
```
- 데이타 타입 변환
    - T(v)형태로 명시적으로 지정
```
func main() {
    var i int = 100
    var u uint = uint(i)
    var f float32 = float32(i)  
    println(f, u)
 
    str := "ABC"
    bytes := []byte(str)
    str2 := string(bytes)
    println(bytes, str2)
}
```
## Go 연산자
- 산술연산자 : +, -, *, /, %, ++, --
- 관계연산자 : ==, !=, >=
- 논리연산자 : &&, ||, !
- Bitwise연산자 : 바이너리 AND, OR, XOR, 쉬프트 연산자 
- 할당연산자 : =, +=, &=, <<=
- 포인터연산자 : &혹은 *을 사용하여 해당 변수의 주소를 얻어내거나 반대로 Dereference할 때 사용
```
var k int = 10
var p = &k  //k의 주소를 할당
println(*p) //p가 가리키는 주소에 있는 실제 내용을 출력
```
## Go 조건문
- if문
    - 조건식은 ()로 둘러 싸지 않아도 됨
    - 조건 블럭 시작 브레이스는 if문과 같은 라인에 두어야 함
    - 조건식 사용 이전에 문장 실행이 가능한데, 이때 정의된 변수는 if문 블럭 안에서만 사용 가능
```
if k == 1 {  //같은 라인
    println("One")
}

if val := i * 2; val < max {
    println(val)
}
 
// 아래 처럼 사용하면 Scope 벗어나 에러
val++
```
- Switch문
    - 복수개의 case값들이 있을 경우는 콤마로 나열 가능
    - switch 뒤에 expression 생략 가능
    - case 문에 복잡한 expression을 가질 수 있음
    - break를 쓰지 않아도 다음 case로 넘어가지 않음, 무조건 break
    - 다음 case도 실행하게 하기 위해서는 fallthrough를 사용 
    - type에 따라 case로 분기 가능 
```
package main
 
func main() {
    var name string
    var category = 1
 
    switch category {
    case 1:
        name = "Paper Book"
    case 2:
        name = "eBook"
    case 3, 4:
        name = "Blog"
    default:
        name = "Other"
    }
    println(name)
     
    // Expression을 사용한 경우
    switch x := category << 2; x - 1 {
        //...
    }   
}

func grade(score int) {
    switch {
    case score >= 90:
        println("A")
    case score >= 80:
        println("B")
    case score >= 70:
        println("C")
    case score >= 60:
        println("D")
    default:
        println("No Hope")
    }
}  

switch v.(type) {
case int:
    println("int")
case bool:
    println("bool")
case string:
    println("string")
default:
    println("unknown")
}  

func check(val int) {
    switch val {
    case 1:
        fmt.Println("1 이하")
        fallthrough
    case 2:
        fmt.Println("2 이하")
        fallthrough
    case 3:
        fmt.Println("3 이하")
        fallthrough
    default:
        fmt.Println("default 도달")
    }
} 
```
## Go 반복문
- 반복문은 for 하나만 있음
- 초기값; 조건식; 증감식을 둘러싸는 괄호는 생략, 괄호 사용시 에러 
- for 문에서 조건식만 사용하여 while 문처럼 사용
- for 문에서 모두 생략하여 무한 루프로 사용
- for range문은 for 인덱스, 요소값 := range 컬렉션으로 구성
- break, continue, goto(루프와 관련없이 사용가능) 사용하여 루프 내에서 이동 처리 가능 
- break 레이블의 형태로 루프 내에서 이동 처리 가능 
```
package main
 
func main() {
    sum := 0
    for i := 1; i <= 100; i++ {
        sum += i
    }
    println(sum)
    
    // 
    n := 1
    for n < 100 {
        n *= 2      
        //if n > 90 {
        //   break 
        //}     
    }
    println(n)
    
    //
    for {
        println("Infinite loop")        
    }
    
    //
    names := []string{"홍길동", "이순신", "강감찬"}
     
    for index, name := range names {
        println(index, name)
    }
    
    var a = 1
    for a < 15 {
        if a == 5 {
            a += a
            continue // for루프 시작으로
        }
        a++
        if a > 10 {
            break  //루프 빠져나옴
        }
    }
    if a == 11 {
        goto END //goto 사용예
    }
    println(a)
 
END:
    println("End")
    
     //
     i := 0
     
L1:
    for {
     
        if i == 0 {
            break L1
        }
    }
 
    println("OK")
}
```

## Go 함수
- func 키워드를 사용하여 정의
- 파라미터는 파라미터명 + 파라미터 타입 형식으로 정의
- 리턴타입이 있는경우 파라미터 괄호 뒤에 리턴타입 추가 
- 가변 파라미터는 ...를 사용
- 리턴값은 없을 수도 하나일 수도 복수개일 수도 있음!
- 리턴값을 변수 이름으로 직접 지정 가능
```
package main
func main() {
    msg := "Hello"
    say(msg)
}
 
func say(msg string) {
    println(msg)
}

//
func main() {   
    say("This", "is", "a", "book")
    say("Hi")
}
 
func say(msg ...string) {
    for _, s := range msg {
        println(s)
    }
}

//
func main() {
    count, total := sum(1, 7, 3, 5, 9)
    println(count, total)   
}

func sum(nums ...int) (int, int) {
    s := 0      // 합계
    count := 0  // 요소 갯수
    for _, n := range nums {
        s += n
        count++
    }
    return count, s
}

//
func sum(nums ...int) (count int, total int) {
    for _, n := range nums {
        total += n
    }
    count = len(nums)
    return
}
```
## Go 익명함수
## Go 클로저
## Go 컬렉션 - 배열
## Go 컬렉션 - Slice
## Go 컬렉션 - Map
## Go 패키지
## Go 구조체
## Go 메서드
## Go 인터페이스
## Go 에러처리
## Go defer와 panic
## Go 루틴
## Go 채널 

