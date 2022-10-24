
import {Container, Row, Col} from "react-bootstrap";

function Header(props){
    return (
        <>
        {props.fullsize ? 
        <header className={"header vh-100"} style={{ 
            backgroundImage: `linear-gradient( rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url("`+props.background+`")` 
        }}>
            <div className="header-inner_title">
                <div className="box">
                    <span className="title">
                        
                    </span>
                </div>
            </div>
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