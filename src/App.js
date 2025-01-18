/* eslint-disable*/

import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import "./App.css";
import data from "./data.js";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import Project from "./Pages/Project.js";

function App() {
  let [otavi] = useState(data);
  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home" className="head-logo" onClick={()=>navigate('/')}>3hee ☘️</Navbar.Brand>
          <Nav className="me-auto">

            <Nav.Link onClick={()=>navigate('/')}>Home</Nav.Link>
            <Nav.Link onClick={()=>navigate('/project')}>Project</Nav.Link>
            <Nav.Link onClick={()=>navigate('/emoticon')}>Emoticon</Nav.Link>
            {/* <Link to="/" className="head-item">
              Main
            </Link>
            <Link to="/project" className="head-item">
              Project
            </Link>
            <Link to="/emoticon" className="head-item">
              Emoticon
            </Link> */}


          </Nav>
        </Container>
      </Navbar>


      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="main-bg"></div>
              <div className="container">
                <div className="row">
                  {otavi.map((a, i) => {
                    return <MainItem otavi={otavi[i]} i={i}></MainItem>;
                  })}
                </div>
              </div>
            </>
          }
        />
        {/* <Route path="*" element={<div>404 Error! </div>} /> */}
        <Route path="/project/:id" element={<Project otavi={otavi} />} />
        <Route path="/emoticon" element={<Emoticon/>}   />
      </Routes>
    </div>
  );
}

function Emoticon() {
  return (
    <div>
      <h4>이모티콘 소개페이지🫠</h4>
    </div>
  )
}

function MainItem(props) {
  return (
    <div className="col-md-4">
      <img
        src={`${process.env.PUBLIC_URL}/0${props.i + 1}.png`}
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
