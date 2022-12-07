import Header from '../components/Header';
import {Container, Row, Col} from "react-bootstrap";

import team_1 from "../assets/team/dalookup.png";
import squad from "../assets/squad.png";

function Team(props) {

  const teams = [
    {
      name: "Dalookup",
      work: "peddler",
      media: team_1
    },
    {
      name: "Dalookup",
      work: "peddler",
      media: team_1
    },
  ];

  return (
    <div className="position-relative team">
      <h2 className="mt-5 ps-5 title text-right">HEROES</h2>
      <Container style={{maxWidth : ""}} className="py-5">
        <Row className="border-gradient border-gradient-purple p-sm-2 p-md-5">
        {teams.map((team, index) => (
          <Col key={index} sm="12" md="3" className="p-1 z-2">
          <div className="p-2">
            <img src={team.media} className="drop-shadow w-100 d-block z-2 mx-auto mb-2 mb-3" />
            <p className="d-block mb-1 text-uppercase" style={{fontWeight: "700"}}>{team.name}</p>
            <p style={{fontWeight: "100"}}>{team.work}</p>
          </div>
        </Col>
        ))}
          
        </Row>
      </Container>
      <img src={squad} style={{}} className="z-1 d-none d-md-block opacity position-absolute mb-5 w-100 bottom-0 end-0" />
    </div>
  ); 
}

export default Team;
