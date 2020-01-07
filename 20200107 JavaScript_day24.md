# 20200107 JavaScript_day24

[웹페이지를 디자인 할 때]



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

  

