import { Component } from "react";
import SingleBook from "./SingleBook";
import { Col, Container, Row } from "react-bootstrap";
import fantasy from "../Books/fantasy.json"

class BookList extends Component {
    state= {
        books: fantasy, //array di libri
        filteredBooks:fantasy, // array di libri per la ricerca
        searchInput: ''
    }
handleSearchInput = (e) =>{
    const searchInput = e.target.value;
    this.setState({searchInput}, ()=>{
        this.filteredBooks(searchInput)
    })
}
filteredBooks = (searchInput)=>{
    const { books } = this.state;
    const filteredBooks = books.map((book)=>
    book.title.toLowerCase().includes(searchInput.toLowerCase())
    )
    this.setState({filteredBooks})
}

    render (){
        // riceve array di libri?
    const {filteredBooks, searchInput}=this.state;
 
    return(
        <Container>
            
            <Row>
                <Col className="mt-5">
                <input type="text" placeholder="Search..." value={searchInput} onChange={this.handleSearchInput}/>
                {filteredBooks.map((book, index) => (<SingleBook key={index} book={book}/>))}
                </Col>
            </Row>
        </Container>
    )
}}
export default BookList