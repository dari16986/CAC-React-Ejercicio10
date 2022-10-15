import React from "react";
import logo from '../../assets/img/netflix.png';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Nabvar(props) {
    return <>
      <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">
            <img
              alt="Netflix"
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            {props.nombre}
          </Navbar.Brand>
      </Navbar>
            
    </>;
}