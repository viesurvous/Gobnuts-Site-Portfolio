
import {Container, Row, Col} from "react-bootstrap";

function Header(props){
    return (
    <>
        {props.fullsize ?
        <header className={"header vh-100 centered"} style={{
        backgroundImage: `linear-gradient( rgba(0,0,0,0.2), rgba(0,0,0,0.2)),url("`+props.background+`")`, 
        backgroundPosition: "center center", 
        backgroundSize: "cover" 
        }}>
        <Container>
            <Row>
                <Col sm={12} md={6}>
                    <div className="header-inner_title">
                        <div className="box">
                            <p className="title">
                                { props.title }
                            </p>
                        </div>
                    </div>
                {props.subtitle &&
                    <div className="header-inner_subtitle">
                        <div className="box">
                            <p className="subtitle">
                                { props.subtitle }
                            </p>
                        </div>
                    </div>
                }
                </Col>
            </Row>   
            
        </Container>
        </header>
        :
        <header className={"banner mb-5 w-100 h-100"} style={{ backgroundImage: `url("`+props.background+`")`,
        backgroundPosition: "center center", 
        backgroundSize: "cover"  }}>
                <Col sm={12} md={12}>
                    <div className="box text-center">
                        <span className="title">
                            {props.title}
                        </span>
                    </div>
                    </Col>
        </header>
        }
    </>
    )
}

export default Header;