import { Card, Col, Container, Row } from "react-bootstrap"

import book from "../Books/fantasy.json"


const SingleBook = (props)=>{
const randomIndex = Math.floor(Math.random()*book.length);
const randomBook = book[randomIndex]

    props=randomBook
    return(
        <Container>
            <Row>
                <Col md={6} xl={2} key={props.asin}>
                <Card>
      <Card.Img variant="top" src={props.img} alt={props.title} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
      </Card.Body>
    </Card>
                </Col>
            </Row>
        </Container>

        
    )
}
export default SingleBook