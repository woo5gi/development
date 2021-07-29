import React,  { useState,useEffect}  from 'react';
import { useHistory, useParams } from 'react-router-dom';

function Detail(props){

  let { id } = useParams();
  let 찾은상품 = props.shoes.find(function(상품){
    return 상품.id == id
  });

  let [ alert, alert변경 ] = useState(true); 
  
  useEffect(()=>{
    let 타이머 = setTimeout(()=>{ alert변경(false) }, 2000);
  
    return ()=>{ clearTimeout(타이머) }
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
          <button className="btn btn-danger">주문하기</button> 
        </div>
      </div>
  </div>  
  )
};

export default Detail 