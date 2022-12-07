import { useState } from "react";
import Header from '../components/Header';
import {Container, Row, Col} from "react-bootstrap";
import FAQ from "./FAQSINGLE";

import img from "../assets/4.jpg";

function Faq (props) {

  const [faqs, setFaqs] = useState([
    {
      question: "What the mint price?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra lorem eu dolor rhoncus, at scelerisque ligula gravida. Sed porta id mi sit amet convallis. Etiam iaculis massa sit amet lacus blandit sodales. Nulla ultrices velit a diam placerat congue. Pellentesque iaculis, ipsum quis eleifend dapibus, est dui eleifend ante, quis fermentum mi ligula quis nisl. Ut et ex dui. Integer id venenatis quam.",
      open: true
    },
    {
      question: "What the mint date?",
      answer: "XX/12/2022",
      open: false
    },
    {
      question:
        "What launchpad do you use?",
      answer: "This many!",
      open: false
    }
  ]);

  const toggleFAQ = index => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };

  return (
    <div className="position-relative">
      <div className="pb-5 vw-100 position-relative">
      <h2 className="mb-5 ps-5 title text-right">F A Q</h2>
        <Row>
          {/** content */} 
          {/** img */}
          <Col sm="12" md="12" lg="4" className="" style={{minHeight: "400px"}}>
            <Header fullsize={false} title="" background={img}></Header>
          </Col>
          <Col className="" sm="12" md="12" lg="8">
          {faqs.map((faq, index) => (
          <FAQ faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
          ))}
          </Col>
        </Row>
      </div>
    </div>
  ); 
}

export default Faq;
