//문제 1. 단어 순서를 바꾸는 해체분석기 제작하기
var pants = 20;
var socks = 100;
`바지${pants} 양말${socks}`;
// 바지20 양말100


// 문제 2. 바지가 0개면 '바지다팔렸어요'라는 문자를 대신 표시해주고 싶습니다. 

function 해체분석기(글자들, 변수들1, 변수들2){
    if(변수들1 == 0){
      console.log(`바지다팔렸어요 양말` + 변수들2);
    }
}
  
  해체분석기`바지${pants} 양말${socks}`;