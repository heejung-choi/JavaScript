

# 생성자 함수

생성자 함수는 가급적이면 앞글자 대문자로

this. 을 썼다는 것으로 생성자 함수인지 알 수 있다. 

객체 생성자 방식보다 생성자 함수 방식은 메모리를 효율적으로 쓸 수 있다.

자바스크립트에서 new 는 비어있는 자바스크립트 객체를 만드는 역할이다. 

호출된 생성자 함수 안에서는 비어있는 멤버들을 넣어주는 역할이다. 

멤버를  제대로 넣으려면 this 를 써야 하는데. 이때 this 는 비어있는 객체를 의미한다. 

생성자 함수만 프로토 타입 쓸 수 있다.

생성자 함수는 프로토 타입이라는 함수를 자동으로 갖고 있다. 메소드를 프로토 타입 영역에 넣게 되면 여러번 생성하더라도, 프로토 타입에 있는 메소드는 공유된다. 

프로토 타입은 생성자 함수의 고유 영역이다. 메모리를 더 효율적으로 쓰기 위한 것이다.



## BOM 

window :브라우저 자체

document: 현재 보고 있는 페이지 정보

location: 페이지 이동을 할 수 있게 해줌

history: 브라우저의 히스토리와 관련된 객체, 어떤 페이지로 바로 옮겨가겠다(go-1:바로 전페이지로 가겠다.)

navigator: 브라우저 정보

screen: 브라우저 화면 크기



-> 내장 객체로 따로 객체생성할 필요 없다. 브라우저 시작할 때 자동으로 생성된다.



- location.href: 페이지의 이동을 구현하고자 할때 사용한다.//현재 보여지고 있는 페이지의 url 

- location.reload(): 현재 페이지를 재요청(f5키와 같다.)

- navigator.userAgent: 이페이지를 랜더링 하고 있는 클라이언트 머신과 브라우저 정보를 하나의 문자열로 추출할 수 있다.

```
var str = navigator.userAgent;
```

- resizeBy:현재크기에서 얼만큼 늘려라 줄여라,
- resizeto: 애당초 그 크기가 되도록 해라. 
- moveBy: 현재 위치에서 이 위치로 옮겨가라.



window 객체 있는 멤버 사용하면, window는 생략하고 멤버들에 접근할 수 있다. 

아래 둘다 가능하다.

```javascript
setInterval(function() {
		child.moveBy(10, 10);
		child.document.write(new Date());
	}, 1000);
	
window.setInterval(function() {
		child.moveBy(10, 10);
		child.document.write(new Date());
	}, 1000);
```

var child = window.open('/edu/first.html', '서브창 이름 설정', 'width=300, height=200');을 쓰면 서브창을 좀더 꾸며서 보낼 수 있다.



# DOM

dom- document object model 

브라우저의 HTML 파서가 서버로부터 전달받은 HTML 문서의 내용을 파싱하고, 랜더링 할 때 인식된 HTML 태그(element), 속성(attribute), 그리고 텍스트(content)로 구성된 컨텐츠를 하나하나 JavaScript 객체로 생성한다.

이때 만들어지는 DOM 객체들(element 객체, text 객체) 부모 자식 관계를 유지해서 트리 구조를 형성한다.

-> JavaScript 코드로 HTML 태그나 속성 그리고 컨텐츠를 읽거나 변경할 수 있도록 지원해서 동적인 웹페이지를 생성

### (1) 필요한 태그를 찾는 방법 : 컨텐츠를 변화시키고자 하는 태그를 찾는 방법을 알아야 한다.

NodeList는 유사배열이라고 해서, 배열이라고 생각하고 쓰면 된다.

​		document.getElementsByTagName("태그명") : NodeList

​		document.getElementById("태그의 id 속성의 값") : Node

​		document.getElementsByClassName("태그의 class속성값") : NodeList



​		document.querySelector("CSS선택자") : Node	

​		document.querySelectorAll("CSS선택자") : NodeList	//css선택자를 이용하여 태그를 찾을 수 있다.

​		

### (2) 태그의 내용이나 속성을 읽고 변경하는 방법, 삭제하는 방법

찾은Element객체.innerHTML

찾은Element객체.textContent

찾은Element객체.getAttribute("속성명")

찾은Element객체.setAttribute("속성명", 속성값)

찾은Element객체.removetAttribute("속성명")

찾은Element객체.속성명

찾은Element객체.속성명 = 새로운 속성값



### (3) 태그에서 발생하는 이벤트 또는 브라우저 객체에서 발생하는 이벤트(window)에 대한 이벤트 핸들러 구현 방법

##### (1) 인라인 이벤트 모델

```javascript
<button onclick="코드"> 1 </button>
```



##### (2) 전역적 이벤트 모델(고전 이벤트 모델) : 태그는 태그대로 있고 이벤트를 자바스크립트 전역코드에서 구현하는 것

```javascript
<button> 2 </button>
var dom = document.getElementsTagName("button")[0]//버튼태그에 대한 dom객체가 있다.
dom.onclick = function(){코드}; //function(){코드}; 는 이벤트 핸들러 함수가 된다.

```



##### (3) 표준 이벤트 모델

```javascript
<button> 3 </button>

var dom = document.getElementsTagName("button")[0]
dom.addEventListener("click". function(){코드});// "click"에는 이벤트 이름만 줘야 한다.
```





​     

```javascript
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<script src="../util.js"></script>
<script>
var dom1 = document.getElementById("t1");
writeColor(dom1, "h3", "red");
/* dom객체라는 것은 미리 만들어지는 것이 아니라 html 태그들이 파싱되면서 만들어지는데 이 경우에는 태그가 랜더링 되기 전이라 null이 추출된다. */
</script>
<h1 id="t1">컨텐트1</h1>
<h2 id="t2">컨텐트1</h2>
<p id="t3">컨텐트1</p>
<div id="t4">컨텐트1</div>
<img id= "t5" src="../../images/totoro.png" width="100">
<hr>
<output id="p"></output>
</body>
</html>
```

```javascript
var dom4 = document.getElementById("t5");
writeColor(dom4, "h3", "magenta"); /* 작성된대로 출력 */
writeColor(dom4.getAttribute("src"), "h3", "magenta");
writeColor(dom4.src, "h3", "magenta"); /* 절대 URL로 출력 */
```

```html
/* dom5.textContent = "<h2>"+new Date().toLocaleString()+"</h2>";
textContent는 할당되는 컨텐트를 다 플레인 컨텐트로 인식을 한다. 
그래서 이것을 <h2>로 인식하기 위해서는 아래와 같이 해줘야 한다.*/
dom5.innerHTML = "<h2>"+new Date().toLocaleString()+"</h2>";
```

```
window.onload= function(){}
제일 나중에 수행시키라는 함수
```

