
import {useEffect, useState} from "react";
import ContainerFluid from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap'
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "../assets/logo.png";

function Navigation(){
  const [offset, setOffset] = useState(0);

    useEffect(() => {
        const onScroll = () => setOffset(window.pageYOffset);
        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <Navbar className="pt-0 pb-0" collapseOnSelect fixed="top" bg={offset > 500 ? 'black' : 'transparent'}  variant="light" expand="lg">
        <ContainerFluid>
            <Navbar.Brand className="pt-0 pb-0">
              <Nav>
                <LinkContainer to="/">
                      <Nav.Link>     
                        <img className="logo" src={logo}/>
                      </Nav.Link>
                </LinkContainer>  
              </Nav>
            </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse>
          <Nav className="mr-auto">
        </Nav>
        </Navbar.Collapse>
        {/** Button Wallet */}
        
        </ContainerFluid>
      </Navbar>
    )
}

export default Navigation;