import Header from '../components/Header';
import {Container, Row, Col} from "react-bootstrap";

import img from "../assets/1.jpg";

function Origins(props) {
  return (
    <Container className="py-5 position-relative">
       <img src={img} className="position-absolute shadow border border-black w-25 top-0 start-100 translate-middle"/>

      <Header title="THE ORIGINS" background={"none"}></Header>
      <Row>
        {/** content */}
        <Col sm="12" md="12" lg="5">
          <div className="p-3 p-md-5 fs-5 border position-relative">
            <p>It’s 2030 or something. Doping is legal now. There’s no scratched faces no mo. Sugar’s sold at groceries.
            Bro, this litter don’t know shit about how to clean up.</p>
            <p>
            No one’s gotta wriggle down a forest in the middle of the night and there ain’t no mo gun shots and shiz. Everything’s pretty chill. But the cets miss being hunted by dem dogs.
            So, it’s just a bunch of cool cets, who’re upto a whole of rat shit that are livin’, and chillin’ and vibin’ together.
            </p>
            <p>It’s 2030 or something. Doping is legal now. There’s no scratched faces no mo. Sugar’s sold at groceries.</p>
          </div>
        </Col>
        {/** img */}
        <Col sm="12" md="12" lg="7">
        <Header fullsize={false} title="" background={img}></Header>
        </Col>
      </Row>
    </Container>
  ); 
}

export default Origins;
