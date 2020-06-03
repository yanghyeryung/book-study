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

var obj1 = {one: 1, two: 2, other: 0};
var obj2 = {three: 3, four: 4, other: -1};
var combined = {
    ...obj1,
    ...obj2,
}
// {one: 1, two: 2, three: 3, four: 4, other: -1}
```

### 가변 변수와 불변 변수
- let 가변변수
- const 불변변수 
    - 불변 변수는 내장스크립트를 사용하면 값을 변경 가능
    - 불변 변수는 내장 함수로 수정하는 것을 암묵적으로 금지하여 무결성을 유지함 
```
const num = 1;
num = 3; // 자료형 오류 발생

const arr2 = [];
arr2.push(1); // arr2 = [1]
```

### 화살표 함수
- () => {} 으로 표시
- 실행 컨텍스트를 this의 범위로 유지 
 
```
var add = (first, second) => {
    return first + second;
}

var add = (first, second) => first + second;
// 결과값을 바로 반환시 중괄호, return 생략하고 표현식으로 입력 가능

var addAndMultiple = (first, second) => ({
    add: first + second, multiply: first * second
});
// 결과값이 객체라면 괄호로 감싸 간결하게 표현 가능 

```

### 객체 확장 표현식과 구조 분해 할당 
```
var x = 0;
var y = 0;
var obj = { x, y };
var randomKeyString = 'other';
var combined = {
    ['one' + randomKeyString]: 'some value',
};
var obj2 = {
    methodA() {console.log('methodA')}
};
```

### 기존 자바스크립트의 구조 분해 사용 방법
```
var list = [0, 1];
var [item1, item2, item3 = -1] = list;

[item2, item1] = [item1, item2];

var obj = {
    key1: 'one',
    key2: 'two',
};

var {
    key1: newKey1,
    key2,
    key3 = 'default key3 value',
} = obj;

var [item1, ...otherItems] = [0, 1, 2];

var {key1, ...others} = {key1: 'one', key2: 'two'};
```

### 라이브러리 의존성 관리 
```
import MyModule from './MyModule.js';
import {ModuleName} from './MyModule.js';
import {ModuleName as RenamesModuleName} from './MyModule.js';
```

