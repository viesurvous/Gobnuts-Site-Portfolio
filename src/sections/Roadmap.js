import Header from '../components/Header';
import {Container, Row, Col} from "react-bootstrap";

import img from "../assets/1500_500.jpg";

function Roadmap(props) {
  return (
      <Row>
        {/** img */}
        {/** content */}
        <Col sm="12" md="12" lg="12" className="position-relative">
        <Header fullsize={true} title="" roadmap={true} background={img}></Header>
        </Col>
      </Row>
  ); 
}

export default Roadmap;
