import { Component } from "react";
import { Form, Button } from "react-bootstrap";
class AddComment extends Component{
    
    state={
      comments:{
        comment:'',
        rate:'1',
        elementId: this.props.bookId
      }
    }
    
  handleInputChange = (property, value)=>{
    this.setState({
      comments:{
      ...this.state.comments,
        [property]:value,}
    })
  }

  handleFormSubmit = async (e)=>{
    e.preventDefault()
    console.log('invio il commento')

    try{
        const res = await fetch('https://striveschool-api.herokuapp.com/api/comments/', {
            method:'POST',
            body: JSON.stringify(this.state.comments),
            headers:{
                'Content-Type':'application/json',
                Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNhNGE0ZmY2ZTNkZDAwMTQ5NWU0MzEiLCJpYXQiOjE2OTgzMTg5MjcsImV4cCI6MTY5OTUyODUyN30._xwcUTOVgkxDD63eq3PHcJQTanHrTR3UTMSpOr2S6Fs"
            }
        })
        if (res.ok){
          alert('Commento salvato')
            this.setState({
                comments:{
                    comment:'',
                    rate:'1',
                    elementId: this.props.bookId,

                }
            })
        }else{
            throw new Error('errore nel salvataggio')
        }
    } catch (err){
        console.log('errore',err)
    }
  }

    render(){
        return(
           
            <Form onSubmit={this.handleFormSubmit}>
            <Form.Group className="mt-4 mb-1" >
              <Form.Label>Comment:</Form.Label>
              <Form.Control 
              type="text" 
              placeholder="il tuo commento..." 
              value={this.state.comments.comment}
              onChange={(e) => this.handleInputChange('comment', e.target.value)}
              required/>
            </Form.Group>
            <Form.Group className="mb-3" >
            <Form.Label>Rating:</Form.Label>
            <Form.Select 
            aria-label="Valutazione" 
            className="mb-3"
            value={this.state.comments.rate}
            onChange={(e) => this.handleInputChange('rate', e.target.value)}
            >
            <option >1</option>
            <option >2</option>
            <option >3</option>
            <option >4</option>
            <option >5</option>
            </Form.Select>
            </Form.Group>
            <Button variant="primary" type="submit">
              Invia
            </Button>
          </Form>
         
        )
    }
}


export default AddComment