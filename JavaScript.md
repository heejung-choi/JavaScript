### 경고창

```javascript
window.alert(1+2+3+4+5);
```

### 콘솔창

```javascript
console.log(1+2+3+4+5);
```

### document 영역

```javascript
document.writeln(1+2+3+4+5);
document.write(1+2+3+4+5);

ln을 자동으로 하기 위해서는 <Pre> </pre> 사용해야 한다.
pre 태그를 사용하면  Enter나 Tab, Space를  다 활용할 수 있어서 긴 문장을 표현할 때 효율적으로 사용할 수 있다.
```

### window prompt

```javascript
var 변수명=window.prompt("");
```

### window.confirm

```javascript
result = window.confirm(message);
```

### random

```javascript
var rand = Math.floor(Math.random());
//Math.random을 정수형으로 출력
```

### array

```javascript
array 선언하는 방법
1) var ary = [10,5,7,21,4,8,18]
2) var ary = new Array(10);
```

### 배열 숫자 정렬

```javascript
ary.sort(function(a,b){ return a-b;});// 큰순으로 정렬
ary.sort(function(a,b){ return b-a;});// 작은순으로 정렬

```

