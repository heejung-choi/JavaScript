# 20200107 JavaScript_day24



## [웹페이지를 디자인 할 때]

(1) pc만

(2)모바일만

(3)pc 모바일 : 반응형 웹 디자인 - www.w3schools.com

​						pc 디자인, 모바일 디자인 분리 - www.naver.com

​																			m.naver.com



- exam2.html:17 Uncaught SyntaxError: Unexpected identifier

- ```javascript
  	var v1;
  		document.writeln(v1+"<br>"); //default값 undefined
  		v1=100;
  		document.writeln(v1+"<br>");
  		v1='가나다';
  		document.writeln(v1+"<br>");
  		varV v1 =true;
  		document.writeln(v1+"<br>");
  		v1=123;
  		document.writeln(v1+45+"<br>");
  		v1='123';
  		document.writeln(v1+45+"<br>");
  ```

  - 식별자 오류 에러를 개발자도구 console창에서 보여준다.

- exam2.html:20 Uncaught ReferenceError: v2 is not defined

- ```javascript
  	var v1;
  		document.writeln(v1+"<br>"); //default값 undefined
  		v1=100;
  		document.writeln(v1+"<br>");
  		v1='가나다';
  		document.writeln(v1+"<br>");
  		var v1 =true;
  		document.writeln(v1+"<br>");
  		v1=123;
  		document.writeln(v2+45+"<br>");
  		v1='123';
  		document.writeln(v1+45+"<br>");
  		
  ```

  - V2라는 변수가 없다는 것을 console창에서 보여준다.





- Java와 JavaScript는 ture가 소문자이고, R은 대문자, 파이썬은 대소문자 섞여있다.



- underfined // 아직 값이 없다 라는 뜻



- 데이터 타입

  - 기본형: number, stting, boolean, null, undefined 

  - 객체타입

    

- 자바스크립트 주요 연산자

  - 수치 연산자 ( +,-,*,/,%,++,--)
  - 비교연산자 (<,>,<=,==,===,!=,!==)
    - 동치연산자 비교
      - == 알아서 형변환 해놓고 연산한다.
      - === 형변환 하지 않고 연산한다. -> 값도 같고, 타입도 같은지를 체크하고 싶으면  이것을 사용한다.
  - 조건연산자 (&&,||,!,?)
  - 대입연산자 (=,+=,-=,*=,/=,%=)
  - 비트연산자 (&,|,^,<<,>>) :섬세하게 출력하고 싶을 때
  - 타입 점검연산자 (typeof, instanceof)
  - 삭제연산자 (delete)

  

- 자바스크립트 제어문

  - if, switch
    - 자바스크립트는 switch문에 사용되는 비교식에 데이터 타입의 제한이 없다.
  - for, while, do-while
  - break, continue
  - 예외처리 구문: try - catch- finally



- NaN : not a number

  

- 비교식1 && 비교식2 && 비교식3

  - 제일먼저 비교식 1 수행 -> 참이라면 뒤에 수행, 거짓이라면 뒤에 수행하지 않는다.

- 비교식 1 || 비교식 2

  - 비교식 1이 참이면 비교식 2를 수행하지 않는다. 둘중에 하나라도 참이면 참이기 때문에
  - 단축 논리 연산자 처리를 한다. 

----------------------> &&과 ||을 이용하여 if문을 대신하여 구현가능하다.

- 자바 

  if(a>b)

  ​		System.out.println(a);

- 자바 스크립트

  window.alert(a);

  ---> a>b && window.alert(a); //참

  ---> a<=b || window.alert(a); //거짓



- window.alert() - 경고 메세지를 출력하는 서브창을 디스플레이 
  - 이러한 서브창을 모달이라고 한다.
- window.prompt() -사용로 부터 데이터를 입력받는 서브창을 디스플레이
- window,.confirm()- 확인받는 목적으로 사용되는 api로써 yes/no를 입력받는  서브창을 디스플레이 -> 확인받을 목적



- 널문자는 isNaN에 필터링 되지 않는다. 
  - '' 이거나  null 이면 다시 필터링 해줘야 한다.
- 함수 스코프는 있지만, 블럭스코프는 없다.







오늘은

화요일

입니다.



오늘은 화요일 입니다.

```javascript
<pre>
    오늘은
    화요일
    입니다.
    <!--형식이 그대로 반영된다.-->
</pre>
```



- 문자를 숫자로 바꾸려면
  - num = Number(num);
  - num = parseInt(num);



- '<h2 id = "blue">' -> 이렇게 해도 문자로 인식된다.
- "<h2 id = 'blue'>" ->이렇게 해도 문자로 인식된다.



## 배열

(1) 다양한 타입의 데이터들을 하나의 배열에 구성할 수 있다.

(2) 배열 생성 후에도 크기 변경 가능



### 배열 생성

- 배열 리터럴 방식

  var a1 = [];

  var a2 = [10,20,30];

  var a3 = [true, '가나다', 100]

  a1.length

  a2.length

  a3.length

  a3[1]  -> '가나다'이다.

  a2[10]=100;



- 표준 API(Array 라는 생성자 함수를 이용) -> 가변갯수

  var a4= new Array( ); //객체 생성해라

  var a5= new Array(10); //배열의 크기 :하나가 왔는데 정수형 숫자가 왔다면 배열의 크기로 인식한다.

  var a55= new Array('abc');

  var a6= new Array(10,20);

  var a7= new Array(true,3.5,'aaa','aa');



### 배열의 활용

pop() :배열 끝의 요소를 취득하여 삭제

push(data): 배열 끝의 요소를 추가

sort([fnc]): 요소를 오름차순으로 정렬

```html
var a =[10,3,7,20,6]
a.sort();  -> [10,20,3,6,7]
default는 문자열 sort이다. 문자열이 싫다면 아규먼트로 그에 맞는 뻥션을 줘야 한다.
-> sort안에 function(a, b){return a-b}을 넣는다.
a.sort(function(a, b){return a-b});

```

```html
<!DOCTYPE html>
<html>
<body>

<p>Click the button to sort the array.</p>

<button onclick="myFunction()">Try it</button>

<p id="demo"></p>

<script>
var fruits = [10,3,7,20,6];
document.getElementById("demo").innerHTML = fruits;

function myFunction() {
  fruits.sort(function(a, b){return a-b});
  document.getElementById("demo").innerHTML = fruits;
}
</script>

</body>
</html>

```



자바는 실제 원소값만 담는 반면 자바스크립트는  foreach문에서 인덱스를 담는다.(undefined가 아닌 것만 꺼내온다.), undefined 값까지 꺼내오고 싶으면 traditional for를 써야 한다.



var d = new Date();//date 생성자



var ary2 = ary.sort();라고 하면 ary 배열 자체가 변경된다.-> 리터블하다.



```java
var ary3 = [30, 11, 5, 27, 9]

document.write(ary3 + "<br>"); 
var ary4 = ary3.sort(function(a, b){ return b-a;});//30,27,11,9,5
document.write(ary3 + "<br>");
var ary4 = ary3.sort(function(a, b){ return a-b;});//5,9,11,27,30
document.write(ary4 + "<br>");
```

