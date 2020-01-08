스코프- 언제부터 언제까지 쓸 수 있는가?

동일한 변수명을 여러번 선언할 수 있다.

자바스크립트 코드를 모듈화를 시키거나, 전역변수의 스펙을 정해야 한다.



html에서 많이 쓰이는 것이라면 자바스크립트로 해서 출력하는 게 좋다.

### try - catch

```javascript
try {
	writeNewLine("l_v : " + l_v  ); 
	/* 이문장을 수행하다가 에러가 발생하면 catch블럭 수행해라.
	catch블럭에 변수만 지정하면 된다. */
} catch(e) {
	writeNewLine(e);
}
```



자바스크립트에서 this는 같은 객체안에 있는 다른 멤버를 접근하더라도, 붙여야 한다.

```javascript
	var obj = {
			name : "듀크",
			eat : function(food){
				writeColor(this.name+"가"+food+"를 먹어요!!","h3","green")
				/* 자바스크립트에서 this는 같은 객체안에 있는 다른 멤버를 접근하더라도, 붙여야 한다. */
			}
	}
```

- 자바스크립트에서는 인덱스를 꺼내오게 했는데 일반 객체일때는 인덱스가 아니라 속성명을 꺼내온다. 

- obj. 속성명(r-value,l-value), obj['속성명']
- obj.속성명()





### 멤버 삭제

delete obj.study; 을 주면 삭제 된다.