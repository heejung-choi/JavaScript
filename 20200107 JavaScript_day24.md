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





