// 1. 간단한 메소드 만들기
var 사람 = {
  name: '손흥민',
  sayHi : function(){
    console.log('안녕 나는 ' + this.name)
  }
}

사람.sayHi(); //안녕 나는 손흥민

// 2. 오브젝트 내의 데이터를 전부 더해주는 메소드만들기
var 자료 = { 
  data : [1,2,3,4,5] 
};

자료.전부더하기 = function(){
  var 합 = 0;
  this.data.forEach(function(a){
    합 = 합 + a;
  });
  console.log(합);
}
자료.전부더하기();

// 3. setTimeout 이용해보기

// <button id="버튼">버튼이에요</button>

// <script>

//   document.getElementById('버튼').addEventListener('click', function(){
//     setTimeout(()=>{ console.log(this.innerHTML) }, 1000); 
//   });

//</script>
