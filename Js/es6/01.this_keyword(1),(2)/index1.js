    // 1. window ( window는 모든 전역변수, 함수, DOM을 보관하고 관리하는 전역객체 )
    // 그냥 쓰거나 함수 안에서 쓰면 this는 window를 뜻함
    console.log(this)
    // 일반 함수 내에서 this라는 값
    function 간지나는함수() {
      console.log(this)
    }
    간지나는함수();

    // 2.  strict mode일 때 함수 안에서 쓰면 this는 undefined
    'use strict';

    function 간지나는함수() {
      console.log(this)
    }
    간지나는함수();

    // 3. object 자료형 내에 함수들이 있을 수 있는데 거기서 this값은 '주인님'을 뜻함
    var 오브젝트1 = {
      data: 'Kim',
      간지함수: function () { console.log('간지') }
    }

    오브젝트1.간지함수();

    // 1번 : this를 함수안에서 썼을 땐 window가 나온다~ 라는건 안외우셔도 되고 

    // 2번 : this는 오브젝트 내의 메소드(함수)에서 사용했을 때 메소드의 주인님 오브젝트를 출력해줌

    console.log('2. event listener와 constructor');
    