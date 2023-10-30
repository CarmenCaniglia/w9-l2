import { Col, Container, Row , Form} from "react-bootstrap"
import SingleBook from "./SingleBook"
import { Component } from "react"
import CommentArea from "./CommentArea"

class BookList extends Component {
    
    state={
        searchValue: '',
        selectedBookAsin: null,
    }

    handleBookSelect = (asin) => {
        this.setState({selectedBookAsin: asin})
    }

    render() {
        const { selectedBookAsin}= this.state;
    return(
        <Container>
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Search a book..."
                value={this.state.searchValue}
                onChange={(e) => {
                  this.setState({
                    searchValue: e.target.value,
                  });
                }}
              />
            </Form.Group>
            <Row>
              {this.props.manyBooks
                .filter((oneBook) =>
                  oneBook.title.toLowerCase().includes(this.state.searchValue.toLowerCase())
                )
                .map((oneBook) => (
                  <Col md={3} key={oneBook.asin}>
                    <SingleBook
                      book={oneBook}
                      onSelect={() => this.handleBookSelect(oneBook.asin)}
                    />
                  </Col>
                ))}
            </Row>
          </Col>
          <Col md={6}>
            {selectedBookAsin && (
              <CommentArea bookAsin={this.state.selectedBookAsin} />
            )}
          </Col>
        </Row>
      </Container>

        
    )
    }
}


export default BookList