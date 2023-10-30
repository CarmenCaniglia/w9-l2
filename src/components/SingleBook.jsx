import { Component } from "react"
import { Card, Button } from "react-bootstrap"
import CommentArea from "./CommentArea"

class SingleBook extends Component {
  
  state={
    selected: false,
  }

  toggleSelected = ()=>{
    this.setState({
      selected: !this.state.selected
    })
  }
  
  // recupero book dentro props, quindi props.book perchè props è l'oggetto che contiene book
  render (){
    return (
      <>
      <Card >
        <Card.Img 
          variant="top" 
          src={this.props.book.img} 
          onClick={this.toggleSelected} 
          className={this.state.selected ? 'red-border': ''}/>
        <Card.Body>
          <Card.Title>{this.props.book.title}</Card.Title>
          <Card.Text>
         {this.props.book.category}
          </Card.Text>
          <Button variant="primary">€ {this.props.book.price}</Button>
        </Card.Body>
      </Card>
      <div>
      {this.state.selected && <CommentArea bookId={this.props.book.asin}/>}
      </div>
      </>
    )
  }
}
 

export default SingleBook