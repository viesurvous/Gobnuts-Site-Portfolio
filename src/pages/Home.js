import Header from '../components/Header';
import Origins from "../sections/Origins";
import {Container, Row, Col} from "react-bootstrap";

import Roadmap from "../sections/Roadmap";
import Sneak from "../sections/Sneak";
import Faq from "../sections/Faq";
import Team from "../sections/Team";
import Footer from "../sections/Footer";

import home from "../assets/gobnuts.jpg";


function Home(props) {

  return (
    <div className="App bg-black">
        <Header fullsize={true} home={false} title="" subtitle="" background={home}></Header>
        <Origins/>
        <Sneak/>
        <Roadmap/>
        <Team/>
        <Faq/>
        <Footer/>
    </div>
  ); 
}

export default Home;
