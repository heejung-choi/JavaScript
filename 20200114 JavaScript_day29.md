# 20200114 JavaScript_day29



# drag & drop

- 사용자 편의성을 고려한 UI
- 마우스를 사용하여 애플리케이션간에 파일이나 데이터를 전달하는 기능으로서 다양한 이벤트 핸들러를 구현하여 처리한다.

- preventdefault :사용해서 이벤트 핸들러 해제



- img 속성은 draggable 속성의 default 값이 ture여서 설정 안해도 되지만 나머지 엘리먼트 들은 draggable 속성을 설정해



### dataTransfer 객체

- 드래그되는 소스객체에서 드롭이 일어나는 타켓 객체로 전달하려는 데이터를 저장하는 객체이다.
- dragstart 이벤트 발생시 전달되는 이벤트 객체의 dataTransfer 속성을 사용한다.

- dataTransfer 객체의 주요 속성과 메서드
  - files 속성 : FileList 타입으로, 드래그 대상이 파일일 때 사용된다.
  - types 속성 : StringList 타입으로, 전달되는 데이터들의 타입명을 추출할 수 있다.
  - clearData(type) : type 명에 해당되는 데이터를 삭제한다.
  - getData(type) : type 명에 해당되는 데이터를 추출한다.
  - setData(type, data) : type 명으로 데이터를 저장한다.
  - setDragImage(image, x, y) : 드래그하는 동앆 커서를 따라다니는 이미지를 (x,y)
    위치에 출력되도록 설정한다.