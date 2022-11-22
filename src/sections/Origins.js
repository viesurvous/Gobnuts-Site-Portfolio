import Header from '../components/Header';
import {Container, Row, Col} from "react-bootstrap";

import img from "../assets/1.jpg";
import graf from "../assets/graf.png";
import graf2 from "../assets/graf2.png";
import typo_1 from "../assets/typo_gobnuts.png";

function Origins(props) {
  return (
    <div className="position-relative">

      <div className="py-5 pb-lg-0 mx-0 px-0 vw-100 position-relative">
        <Header title="GOBNUTS ORIGINS" background={"none"}></Header>
      <img src={graf} className="d-none d-md-block position-absolute mt-3 border-black w-25 top-0 start-0" />
        <Row>
          {/** content */} 
          <Col sm="12" md="12" lg="6">
            <div className="p-3 p-md-5 fs-5 mb-xs-0 mb-lg-5  font-weight-bold position-relative fw-800">
              <p>It’s 2030 or something. Dopig is legal now. There’s no scratched faces no mo. Sugar’s sold at groceries.
              Bro, this litter don’t know shit about how to clean up.</p>
              <p>
              No one’s gotta wriggle down a forest in the middle of the night and there ain’t no mo gun shots and shiz. Everything’s pretty chill. But the cets miss being hunted by dem dogs.
              So, it’s just a bunch of cool cets, who’re upto a whole of rat shit that are livin’, and chillin’ and vibin’ together.
              </p>
              <p>It’s 2030 or something. Doping is legal now. There’s no scratched faces no mo. Sugar’s sold at groceries.</p>
            </div>
          </Col>
          {/** img */}
          <Col sm="12" md="12" lg="6" className="ps-0" style={{minHeight: "400px"}}>
            <Header fullsize={false} title="" background={img}></Header>
          </Col>
        </Row>
      </div>
      <img src={typo_1} className="d-none opacity-100 d-md-block position-absolute mt-3 border-black w-25 bottom-0 start-0"/>
      <img src={graf2} className="d-none d-md-block opacity-100 position-absolute mt-3 border-black w-50 bottom-0 end-0"/>
    </div>

    
  ); 
}

export default Origins;
