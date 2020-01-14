var source, drop;
/*표준이벤트 모델 사용*/
function initiate(){
	source=document.getElementById('image');
/*  img 태그 아이디 값이 image*/
	source.addEventListener('dragstart', dragged, false);
/*  'dragstart'함수 수행하면 dragged*/
	drop=document.getElementById('dropbox');
	drop.addEventListener('dragover', function(e){console.log("dragover"); e.preventDefault(); }, false);
	drop.addEventListener('drop', dropped, false);
}
function dragged(e){
	console.log("dragstart");
	var code='<img src="'+source.getAttribute('src')+'">';
/*  몬스터에 대한 데이터를 setdata라는 메소드 호출하여 적당한 이름으로 보관*/
	e.dataTransfer.setData('Text', code);
}
function dropped(e){
	console.log("drop");
	e.preventDefault();
	drop.innerHTML+=e.dataTransfer.getData('Text');
/*	드롭이 발생했으니까 datatransfer을 가지고 드롭 효과 일어나도록*/
/*	+를 사용해서  업엔드 처리를 하고 있다.*/
}
window.addEventListener('load', initiate);
/*이것이 끝나면 호출해줘 라는 이벤트 리스너 호출*/






