/* eslint-disable */
import React, { useState, lazy, Suspense} from 'react';
import { Navbar, Container, Nav, NavDropdown, Button } from 'react-bootstrap';
import './App.css';
import Data from './data.js';
import { Link, Route, Switch, useHistory } from 'react-router-dom';
//import Detail from './Detail.js';
import axios from 'axios';
import Cart from './Cart.js';
let Detail = lazy( ()=>{ return import('./Detail.js') } );

function App() {

  let [shoes, shoes변경] = useState(Data);

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/"> Home</Nav.Link>
              <Nav.Link as={Link} to="/detail"> Detail</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>


      <Switch>
        <Route exact path="/">
          <div className="background">
            <h1>hollo,world</h1>
            <p>글내용</p>
            <p><Button variant="primary">learn more</Button></p>
          </div>

          <div className="container">
            <div className="row">
              {
                shoes.map((a, i) => {
                  return <Card shoes={shoes[i]} i={i} key={i} />
                })
              }
            </div>
            <button className="btn btn-primary" onClick={() => {
              axios.get('https://codingapple1.github.io/shop/data2.json')
                .then((result) => {
                  console.log(result.data);
                  //카피본 
                  shoes변경([...shoes, ...result.data]);
                })
                .catch(() => { console.log("Error") })
            }}>더보기</button>
          </div>

        </Route>
        
        <Route path="/cart">
          <Cart></Cart>
        </Route>

        <Route path="/detail/:id">
          <Suspense fallback={<div>로딩중입니다~!</div>}>
            <Detail shoes={shoes} />
          </Suspense>
        </Route>


      </Switch>

    </div>
  );
}

function Card(props) {
  let history = useHistory();
  return (
    <div className="col-md-4" onClick={() => { history.push('/detail/' + props.shoes.id) }}>
      <img src={'https://codingapple1.github.io/shop/shoes' + (props.i + 1) + '.jpg'} width="100%" />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content} & {props.shoes.price}</p>
    </div>
  )
}

export default App;
