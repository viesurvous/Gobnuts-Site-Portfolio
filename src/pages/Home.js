import Header from '../components/Header';
import headerbackground from "../assets/gobnuts.jpg";

import Origins from "../sections/Origins";

function Home(props) {
  return (
    <div className="App">
        <Header fullsize={true}  title="Home" background={headerbackground}></Header>
        {/* <Origins title="Origins" background={headerbackground}/> */}

        {/* <Header fullsize={false}  title="Origins" background={background}></Header>
        <Header fullsize={false}  title="Product" background={background}></Header>
        <Header fullsize={false}  title="Traits" background={background}></Header>
        <Header fullsize={false}  title="Team" background={background}></Header>
        <Header fullsize={false}  title="Contact" background={background}></Header> */}

    </div>
  ); 
}

export default Home;
