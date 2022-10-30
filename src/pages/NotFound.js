import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Header from "../components/Header";
import background from "../assets/gobnuts.jpg";

const NotFound = () => {
    return (
        <Header fullsize={true} title="Page not found." subtitle="try another link." background={background}></Header>
    )
}
  
export default NotFound;