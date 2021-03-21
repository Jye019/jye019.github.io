---
title: null과 undefined
date: "2021-03-10"
---

`null`과 `undefined`는 JS의 어느 자료형에도 속하지 않는 값으로, 오로지 자신만의 자료형을 만든다.

```js
let a = null;
```
위와 같이 `null`을 할당하는 것은 **알 수 없는(unknown)**, **비어 있는(empty)** 변수임을 나타낸다. 

```js
let b = undefined;
```
`undefined`는 **값이 할당되지 않은 상태인** 변수임을 나타낸다. 즉, 값이 할당되지 않은 변수의 초기화를 위해 사용된다. 

<br/>

### undefined이 반환되는 경우

JS 엔진은 다음 세가지 경우와 같이 값이 할당되어 있지 않는 경우 자동으로 undefined를 할당한다.

```js
let a;
// a = undefined

let obj = {}
// obj.a = undefiend

let func = function () {};
let exec = func()
// exec = undefined
``` 

<br/>  

### typeof null === object

```js
typeof undefined // undefined
typeof null // object
```
`typeof`연산자를 이용해 `undefined`의 자료형을 출력하면 `undefined`가 나오는 반면 `null`의 자료형을 출력하면 `Object`가 나오는 것을 확인할 수 있다. 이는 `null`이 객체임을 나타내는 것은 아니다. `null`은 별도의 고유한 자료형을 가지는 특수 값일 뿐, 언어의 하위 호환성을 유지하기 위해 이런 오류를 수정하지 않고 남겨둔 상황이다. 

<br/>

### null과 undefined의 사용  

```js
let c;
```
위에서 언급한 바와 같이 변수를 초기화하지 않고 생성하면 자동으로 `undefined`가 할당된다. 따라서 `undefined`는 예약어로써 사용하는 것이 권장되며 변수가 비어있다는 것을 직접적으로 명시하기 위해서는 `null`을 사용하는 것이 좋다.  

또한 `null`은 GC의 대상이 되기 때문에 memory 관리를 위해 `null`을 사용하기도 한다. 


<br/>

---
#### Reference
[자료형](https://ko.javascript.info/types)  