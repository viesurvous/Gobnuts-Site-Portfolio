import Header from '../components/Header';
import {Container, Row, Col} from "react-bootstrap";

import img from "../assets/roadmap.jpeg";
import typo_roadmap from "../assets/typo_roadmap.png";

function Roadmap(props) {

  return (
      <Row>
        {/** img */}
        {/** content */}
        <Col sm="12" md="12" lg="12" className="position-relative">
          <h2 className="my-5 ps-5 pe-2 title">ONE GOAL : ESCAPE THE MOON</h2>
          <img src={img} style={{width : "100%"}}/>
        </Col>
        <Col sm="12" className="mt-5">
          <div className="position-relative bg-violet py-2"></div>
          <div className="position-relative bg-red py-2"></div>
          <div className="spr-reverse"></div>
        </Col>
      </Row>
  ); 
}

export default Roadmap;
