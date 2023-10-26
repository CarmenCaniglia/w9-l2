import { Component } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
class AddComment extends Component{
    
    state={
      comments:{
        comment:'',
        rate:'1',
       
      }
    }
    
  handleInputChange = (property, value)=>{
    this.setState({
        [property]:value,
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
            this.setState({
                comments:{
                    comment:'',
                    rate:'1'
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
            <Container>
                <Row>
                    <Col>
                    <h3>Aggiungi un commento:</h3>
            <Form onSubmit={this.handleFormSubmit}>
            <Form.Group className="mb-3" >
              <Form.Label>Comment:</Form.Label>
              <Form.Control 
              type="text" 
              placeholder="il tuo commento..." 
              value={this.state.comments.comment}
              onChange={(e)=> {
                this.setState({
                    comments:{
                        ...this.state.comments, comment: e.target.value
                    }
                })
              }}
              required/>
            </Form.Group>
            
            <Form.Select 
            aria-label="Valutazione" 
            className="mb-3"
            value={this.state.comments.rate}
            onChange={(e)=>this.handleInputChange('rate', e.target.value)}
            >
            <option >1</option>
            <option >2</option>
            <option >3</option>
            <option >4</option>
            <option >5</option>
            </Form.Select>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
          </Col>
          </Row>
          </Container>
        )
    }
}


export default AddComment