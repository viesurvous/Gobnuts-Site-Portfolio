import Header from '../components/Header';
import background from "../assets/gobnuts.jpg";

function Home(props) {

  return (
    <div className="App">
        <Header fullsize={true} home={true} title="Get a Nutlist" subtitle="with a 50/50 chance." background={background}></Header>
    </div>
  ); 
}

export default Home;
