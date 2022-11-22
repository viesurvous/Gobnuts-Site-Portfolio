import Header from '../components/Header';
import {Container, Row, Col} from "react-bootstrap";

import img from "../assets/1500_500.jpg";
import typo_roadmap from "../assets/typo_roadmap.png";

function Roadmap(props) {
  return (
    <div className="position-relative">
      <Row>
        {/** img */}
        {/** content */}
        <Col sm="12" md="12" lg="12" className="position-relative">
          <div className="position-absolute z-2 w-50 top-0 end-0 bg-black py-2 px-2 text-center fs-3">
            <h2 className="my-4 title">ONE GOAL : ESCAPE THE MOON</h2>
          </div>
          <Header fullsize={true} title="" roadmap={true} background={img}></Header>
        </Col>
        <Col>
          <div className="position-relative bg-yellow py-2"></div>
          <div className="position-relative bg-violet py-2"></div>
          <div className="position-relative bg-red py-2"></div>

        </Col>
      </Row>
    </div>
  ); 
}

export default Roadmap;
