import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import { Nav } from 'react-bootstrap';

import { connect } from 'react-redux';

function Detail(props ) {
  let history = useHistory();
  let [누른탭, 누른탭변경] = useState(0);
  let [스위치, 스위치변경] = useState(false);

  let { id } = useParams();
  let 찾은상품 = props.shoes.find(function (상품) {
    return 상품.id == id
  });

  let [alert, alert변경] = useState(true);

  useEffect(() => {
    let 타이머 = setTimeout(() => { alert변경(false) }, 2000);

    return () => { clearTimeout(타이머) }
  }, []);

  return (
    <div className="container">
      {
        alert === true
          ? (<div className="my-alert2">
            <p>재고가 얼마 남지 않았습니다</p>
          </div>)
          : null
      }

      <div className="row">
        <div className="col-md-6">
          <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{찾은상품.title}</h4>
          <p>{찾은상품.content}</p>
          <p>{찾은상품.price}원</p>
          <button onClick={() => {

            props.dispatch({ type: '항목추가', 데이터: { id: 찾은상품.id, name: 찾은상품.title, quan: 1 } });
            history.push('/cart');

          }}>주문하기</button>

        </div>

        <div>
          <Nav variant="tabs" defaultActiveKey="link-0">
            <Nav.Item>
              <Nav.Link eventKey="link-0" onClick={() => { 스위치변경(false); 누른탭변경(0) }}>Active</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-1" onClick={() => { 스위치변경(false); 누른탭변경(1) }}>Option 2</Nav.Link>
            </Nav.Item>
          </Nav>
          <CSSTransition in={스위치} classNames="wow" timeout={500}>
            <TabContent 누른탭={누른탭} 스위치변경={스위치변경} />
          </CSSTransition>
        </div>
      </div>
    </div>
  )
};
function TabContent(props) {

  useEffect(() => {
    props.스위치변경(true); //탭내용 컴포넌트가 로드될 때 true
  });

  if (props.누른탭 === 0) {
    return <div>내용0</div>
  } else if (props.누른탭 === 1) {
    return <div>내용1</div>
  } else if (props.누른탭 === 2) {
    return <div>내용2</div>
  }
}

function state를props화(state){
  console.log(state);
  return {
    state : state.reducer,
    alert열렸니 : state.reducer2 //리듀서2에 있는거 가져오는법
  }
}


export default connect(state를props화)(Detail);