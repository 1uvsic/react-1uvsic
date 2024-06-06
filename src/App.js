/* eslint-disable*/ 

import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import './App.css';
import data from './data'

function App() {

  let [otavi] = useState(data)
  
  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home" className="head-logo">3hee ☘️</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#main" className="head-item">Main</Nav.Link>
            <Nav.Link href="#Project" className="head-item">Project</Nav.Link>
            <Nav.Link href="#Emoticon" className="head-item">Emoticon</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className="main-bg"></div>

      <div className="container">
        <div className="row">
          {
            otavi.map((a, i)=>{
              return (
                <MainItem otavi ={otavi[i]} i={i}></MainItem>
              )
            })
          }
        </div>
      </div>
      </div>

  );
}

function MainItem(props) {
  return (
    <div className="col-md-4">
    <img src={`${process.env.PUBLIC_URL}/0${props.i+1}.png`} 
    alt={`Emoticon_${props.i}`} 
    className="img-fluid" 
    width="70%" 
    />
    <h4>{props.otavi.title}</h4>
    <p>{props.otavi.content}</p>
  </div>
  );
}

export default App;
