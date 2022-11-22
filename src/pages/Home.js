import Header from '../components/Header';
import Origins from "../sections/Origins";
import Roadmap from "../sections/Roadmap";
import Sneak from "../sections/Sneak";

import Team from "../sections/Team";
import home from "../assets/gobnuts.jpg";


function Home(props) {

  return (
    <div className="App bg-black">
        <Header fullsize={true} home={false} title="" subtitle="" background={home}></Header>
        <Origins/>
        <Sneak/>
        <Roadmap/>
        <Team/>
    </div>
  ); 
}

export default Home;
