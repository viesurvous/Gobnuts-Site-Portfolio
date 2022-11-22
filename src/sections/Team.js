import Header from '../components/Header';
import {Container, Row, Col} from "react-bootstrap";

import team_1 from "../assets/team/dalookup.png";
import squad from "../assets/squad.png";

function Team(props) {
  return (
    <div className="position-relative team">
      <Container style={{maxWidth : "800px"}} className="py-5">
        <div className="d-block d-lg-none">
          <Header title="SQUAD" background={"none"}></Header>
        </div>
        <Row className="border-gradient border-gradient-purple p-5">
          <Col sm="12" md="3" className="p-1 z-2">
            <div className="p-2">
              <img src={team_1} className="drop-shadow w-100 d-block z-2 mx-auto mb-2 mb-3" />
              <p className="d-block mb-1 text-uppercase" style={{fontWeight: "700"}}>DALOOKUP</p>
              <p style={{fontWeight: "100"}}>Buildor</p>
            </div>
          </Col>
          <Col sm="12" md="3" className="p-1 z-2">
            <div className="p-2">
              <img src={team_1} className="drop-shadow w-100 d-block z-2 mx-auto mb-2 mb-3" />
              <p className="d-block mb-1 text-uppercase" style={{fontWeight: "700"}}>DALOOKUP</p>
              <p style={{fontWeight: "100"}}>Buildor</p>
            </div>
          </Col>
          <Col sm="12" md="3" className="p-1 z-2">
            <div className="p-2">
              <img src={team_1} className="drop-shadow w-100 d-block z-2 mx-auto mb-2 mb-3" />
              <p className="d-block mb-1 text-uppercase" style={{fontWeight: "700"}}>DALOOKUP</p>
              <p style={{fontWeight: "100"}}>Buildor</p>
            </div>
          </Col>
          <Col sm="12" md="3" className="p-1 z-2">
            <div className="p-2">
              <img src={team_1} className="drop-shadow w-100 d-block z-2 mx-auto mb-2 mb-3" />
              <p className="d-block mb-1 text-uppercase" style={{fontWeight: "700"}}>DALOOKUP</p>
              <p style={{fontWeight: "100"}}>Buildor</p>
            </div>
          </Col>
          <Col sm="12" md="3" className="p-1 z-2">
            <div className="p-2">
              <img src={team_1} className="drop-shadow w-100 d-block z-2 mx-auto mb-2 mb-3" />
              <p className="d-block mb-1 text-uppercase" style={{fontWeight: "700"}}>DALOOKUP</p>
              <p style={{fontWeight: "100"}}>Buildor</p>
            </div>
          </Col>
        </Row>
      </Container>
      <img src={squad} style={{}} className="z-1 d-none d-md-block opacity position-absolute mb-5 w-100 top-0 right-0" />
    </div>
  ); 
}

export default Team;
