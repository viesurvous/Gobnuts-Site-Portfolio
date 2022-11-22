
import {Container, Row, Col} from "react-bootstrap";

function Block (props){
    return (
        <div className="position-absolute">
          {props.title}
        </div>
    )
}

export default Block;