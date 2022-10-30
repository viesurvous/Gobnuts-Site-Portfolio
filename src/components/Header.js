
import {Container, Row, Col} from "react-bootstrap";
import PostTweet from './PostTweet';

function Header(props){
    return (
        <>
        {props.fullsize ?
        <header className={"header vh-100 centered"} style={{ 
            backgroundImage: `linear-gradient( rgba(0,0,0,0.9), rgba(0,0,0,0.7)),url("`+props.background+`")` 
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
                {props.home &&
                <Col sm={12} md={6} className="centered">
                    <PostTweet/>
                </Col>
                }
            </Row>   
        </Container>
        </header>
        :
        <header className={"banner p-5 w-100"} style={{ 
            backgroundImage: `linear-gradient(to left, rgba(0,0,0,1), rgba(0,0,0,0.5)),url("`+props.background+`")` 
        }}>
            <Container>
             <div className="box">
                    <span className="title">
                        {props.title}
                    </span>
                </div>
            </Container>
        </header>
        }
            </>
    )
}

export default Header;