# 두잇 리액트 프로그래밍 정석 / 이지스퍼블리싱
## 리액트 ES6 문법
### 템플릿 문자열
- 템플릿 문자열은 백틱(`)으로 표시
- `${}`를 사용하여 변수 표시 
```
var value1 = 1;
var value2 = 2;
var operator1 = `곱셈값은 ${value1 * value2}입니다.`;
```
### 전개 연산자 
- 나열형 자료 추출, 연결시 사용
- 배열, 객체, 함수 인자 표현식에서 ...로 표시
```
var arr1 = ['one', 'two'];
var arr2 = ['three', 'four'];
const combined = [...arr1, ...arr2];
// ['one', 'two', 'three', 'four'];

```