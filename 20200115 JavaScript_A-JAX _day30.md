# 20200115 JavaScript/A-JAX _day30

# geolocation API



### window.navigator.gelocation

- 콜백함수라고 한다.
- 위치요청에 대해 사용자가 동의하면 브라우저의 위치 정보가 반환된다.



# A-JAX : AJAX = Asynchronous JavaScript and XML



- 지금은 어떤 형식이든 사용할 수 있다. 과거에는  xml로 사용했다.
- 고전에는 웹의 통신 방법은 웹페이지의 일부를 갱신하기 위해서는 페이지 전체를 다시 로드해야 했다.
- ajax의 핵심은 재로드하지 않고 웹페이지의 일부만을 갱신하여 웹서버와 데이터를 교환하는 방법이다. 즉, 빠르게 동적 웹페이지를 생성하는 기술이다. 
- 로케이션/ a태그로 페이지 이동할 수 있다.
  - 그러나 first.html을 보고 있는 상황에서 second.html을 함께 보고 싶다면 사용하는 것이 ajax이다.

- 개발자도구 network에서 /status : 200 ->성공적/ type : xhr ->ajax 기술을 사용했다는 뜻

- ajax status 200 이면 성공 404면 오류 (못찾겠다.) 

- readyState == 4  요청이 완전이 끝난 상태 인지 체크
- request.status == 200 성공적인지 체크
- 

### XML(Extensible Markup Language)

- 브라우저는 모르는 태그를 무시한다.

- xml 선언부를 제외하고는 기존 HTML5의 기본구조와 사용방법이 거의 유사 

- 태그명을 직접 정해서 쓴다. 태그는 한덩어리로, 인용부호를 주며, 소문자로 해야한다. 또 시작태그와 종료태그를 쌍으로 해야 한다.

- mt태그(컨텐트가 없는 태그)작성할 때 

- ```
  <br>
  <br/> -> xml은 이렇게만 작성해야 한다.
  xml의 고유 작성 구문만 조심하면 된다.
  ```

- 루트 엘먼트(전체 감싸는 최상위 태그)

- DTD(또는 XML Schema) -> xml 문서 구조를 정의한 규칙

- 최근에는 XML Schema가 많이 쓰인다.

- 스키마로 만들었을때는  .xsd 

- dtd로 만들었을 때는 .dtd



### JSON

- JSON(제이슨, JavaScript Object Notation)은, 인터넷에서 자료를 주고 받을 때 그 자료를 표현하는 방법이다. 자료의 종류에 큰 제한은 없으며, 특히 컴퓨터 프로그램의 변수값을 표현하는 데 적합하다. 형식은 자바스크립트의 구문 형식을 따르지만, 프로그래밍 언어나 플랫폼에 독립적이므로 C, C++, C#, 자바, 자바스크립트, 펄, 파이썬 등 많은 언어에서 이용할 수 있다.

- JSON 문법은 자바스크립트 표준인 ECMA-262 3판의 객체 문법에 바탕을 두며, 인코딩은 유니코드로 한다. 표현할 수 있는 기본 자료형으로는 수, 문자열, 참/거짓, null이 있고, 집합 자료형으로는 배열과 객체가 있다.
- 

### [ JSON의 장점 ] 

- JSON은 텍스트로 이루어져 있으므로, 사람과 기계 모두 읽고 쓰기 쉽다.
-프로그래밍 언어와 플랫폼에 독립적이므로, 서로 다른 시스템간에 객체를 교환하기에 좋다.

- JSON은 개방형 표준이며, 읽기 및 쓰기가 쉽고 가볍다.



- json도 배열 포함할때 js처럼 대괄호를 쓴다.
- json은 중괄호로 구성되어야 하고 한덩어리의 객체로 구성되어 있어야 한다.
- 하나의 jason에는 객체, 블럭이 있다.
- name은 반드시 string이여야 하고 value는 상관없지만 문자라면 string 이어야 한다.
- dom은 원래 xml것이다.





- 주기적으로 서버에 요청하는 기술 -> 폴링
- 폴링: 리얼타임 웹을 위한 기법으로 일정한 주기(특정한 시간)를 가지고 서버와 응답을 주고받는 방식이 폴링 방식이다.
- http 요청은 클라이언트만이 응답은 서버만이 할 수 있다.
- 롱폴링: 서버 측에서 접속을 열어두는 시간을 길게하는 방식.
- 푸쉬기술: 네트워크 프로그램으로 개발, 서버가 프로그램을 계속 쥐고 있으면서 처리하겠다.jsp안에 들어갈 코드는 자바로 설계한다.





# [ Query String (쿼리 문자열)]

웹 클라이언트에서 웹 서버에 정보를 요청할 때 추가로 전달하는 문자열

이 문자열을 정해진 규칙으로 구성되어 전달되어야 하는데 이 규칙을 url encoding 또는 query string encoding 규칙이라 한다.

1) 모든 데이터들은 name=value 형식이어야 한다.

2) 여러개의 name = value 쌍을 전달할 때는 & 기호로 구분한다.

3) 공백은 + 문자로 변환되어 전달된다.

4) 영문과 숫자 그리고 일부 특수문자를 제외하고 % 기호와 함께 16진수 코드값으로 전달되어야 한다.

https://search.naver.com/search.naver?sm=top_hty&fbm=0&ie=utf8&query=ABCabc+123%EA%B0%80%EB%82%98%EB%8B%A4

로그인 성공: id=ajaxtest&passwd=12345

id=a1234sd&passwd=ssdfsdf