import { Col, Container, Row , Form} from "react-bootstrap"
import SingleBook from "./SingleBook"
import { Component } from "react"

class BookList extends Component {
    
    state={
        searchValue: ''
    }

    render() {
    return(
        <Container>
            <Row className="justify-content-center">
                <Col md={6}>
                    <Form.Group className="mb-3">
                        <Form.Control 
                        type="text" 
                        placeholder="Search a book..."
                        value={this.state.searchValue}
                        onChange={e =>{
                            this.setState({
                                searchValue:e.target.value
                            })
                        }} />
                    </Form.Group>
                </Col>
             </Row>
            <Row>
                {/* faccio un map su tutti i libri...dopo il map bisogna assegnare la key */}
                {this.props.manyBooks.filter(oneBook => oneBook.title.toLowerCase().includes(this.state.searchValue.toLowerCase()))
        .map(oneBook =>{
            return <Col md={3} key={oneBook.asin}>
                 <SingleBook book={oneBook}/>
                 </Col>
            // ho ciclato un array di libri, mi viene fornito un libro alla volta, per ogni libro renderizzo singleBook passando quel libro. Così sono montati uno alla volta e mostrati nella pagina
        })
      }
            </Row>
        </Container>

        
    )
    }
}


export default BookList