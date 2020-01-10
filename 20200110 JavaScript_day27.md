

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

찾은Element객체.setAttribute("속성명", 속성값) //필수 속성이 아니면 setattribute를 써야 한다.

찾은Element객체.removetAttribute("속성명")

찾은Element객체.속성명

찾은Element객체.속성명 = 새로운 속성값



### (3) 태그에서 발생하는 이벤트 또는 브라우저 객체에서 발생하는 이벤트(window)에 대한 이벤트 핸들러 구현 방법

##### (1) 인라인 이벤트 모델

```javascript
<button onclick="코드"> 1 </button>
```

on + 이벤트 이름 / 코드에는 세미콜론으로 코드 여러개 불러와도 되고, 함수로 만들어서 함수로 불러와도 된다.

##### (2) 전역적 이벤트 모델(고전 이벤트 모델) : 태그는 태그대로 있고 이벤트를 자바스크립트 전역코드에서 구현하는 것

```javascript
<button> 2 </button>
var dom = document.getElementsTagName("button")[0]//버튼태그에 대한 dom객체가 있다.
dom.onclick = function(){코드}; //function(){코드}; 는 이벤트 핸들러 함수가 된다.

```

이벤트 핸들러를 등록하고자 하는 대상의 DOM 객체를 찾아서 해당 DOM객체에 dom.onclick= function

여기서 dom.onclick는 무조건 소문자이다.

##### (3) 표준 이벤트 모델

```javascript
<button> 3 </button>

var dom = document.getElementsTagName("button")[0]
dom.addEventListener("click". function(){코드});// "click"에는 이벤트 이름만 줘야 한다.
```

dom.addEventListener("click". function(){코드}); : 이벤트 핸들러 등록시

removeEventListener(eventName, handler) : 이벤트 핸들러 삭제시



- 이벤트: 웹페이지 상에서 마우스, 키보드 등을 통해 발생하는 액션 

​			웹브라우저에서 자동으로 발생하는 액션

- 이벤트 핸들러(리스너) : 이벤트가 발생했을 때 수행되는 기능을 구현한 함수

-  이벤트 타켓 : 이벤트가 발생한 대상 DOM 객체

  - (1) this

  - (2) 핸들러에 매개변수(e)를 하나 정의한 후 e.target이라고 쓴다.

  - ```
    function f2(e) {
    		//alert(e.target.textContent);
    		alert(this.textContent);
    	} 
    		둘다 가능
    ```

    



- this 객체

  : 함수가 어떻게 실행되느냐에 따라 결정된다.

  함수가 객체의 메서드로서 불리게 되면, this는 메소드를 부른 객체로 설정된다.

  new 연산자를 통해 인스턴스(객체)를 생성해 함수를 부를때도 같은 원리다. 이런 방법으로 부르게 되면 함수 스코프내에서 this의 값은 새로 만들어진 객체로 설정된다.

  

```javascript
window.setTimeout(function() {
	dom.innerHTML = "오늘은 불금";
	dom.style.color ="red";
	dom.style.backgroundColor ="lime";
/* 	자바스크립트에서는 - 를 인식하지 않는다.
	background-Color css에서는 원래 이렇게 해야 하지만
	자바스크립트에서는 - 를 빼고 다음에 나오는 첫글자를 대문자로 바꾸면
	사용할 수 있다. */
}, 5000);
```





### data-xxx: 사용자가 필요에 의해 태그에 정의하는 속성

data- 가 붙어있으면 임의의 속성으로 간주하여 허용한다.



### [디폴트 이벤트 핸들러]

HTML 태그에 디폴트로 등록되어 있는 이벤트 핸들러를 의미한다. 

태그에 따라서는 눈에 띄는 디폴트 이벤트 핸들러를 가지고 있다.

```javascript
<a> : click 이벤트에 대한 핸들러를 내장하고 있다.

<form> : submit 이벤트에 대한 핸들러를 내장하고 있다. 

<a herf = "http://java.sun.com/">...</a>
<a herf = "test.html/">...</a>
<a herf = "#memo">...</a>
# 엥커명 (메모라는 이름이 붙여있는 태그 위치로 가라.)
<a herf = "test.html#subject">...</a>
test.html을 들어가는데 subject이라는 앵커명이 설정된 것을 가장 먼저 보여주라고 하는 것이다.


<a name="memo"></a>

```

- 인라인 이벤트 모델은 return false; 하면 a태그에 대한 디폴트 이벤트 핸들러가 없어진다.
- 고전 이벤트 모델은 return false;
- 표준 이벤트 모델은 e.preventDefault(); 
- 고전은 이벤트 핸들러 2개 못하지만, 디폴트 이벤트 핸들러는 예외이다. 디폴트 이벤트 핸들러까지는 추가로 지정할 수 있다.