import Header from '../components/Header';
import Origins from "../sections/Origins";
import Roadmap from "../sections/Roadmap";

import home from "../assets/gobnuts.jpg";


function Home(props) {

  return (
    <div className="App bg-black">
        <Header fullsize={true} home={false} title="" subtitle="" background={home}></Header>
        <Origins/>
        <Roadmap/>
    </div>
  ); 
}

export default Home;
