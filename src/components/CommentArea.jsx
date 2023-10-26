import { Component } from "react";
import { Col, Container, Row, } from "react-bootstrap";
import CommentList from "./CommentList";
import AddComment from "./AddComment";

class CommentArea extends Component {

    state={
        comments:[]
    }

componentDidMount(){
    
        fetch('https://striveschool-api.herokuapp.com/api/comments/', {headers:{
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNhNGE0ZmY2ZTNkZDAwMTQ5NWU0MzEiLCJpYXQiOjE2OTgzMTg5MjcsImV4cCI6MTY5OTUyODUyN30._xwcUTOVgkxDD63eq3PHcJQTanHrTR3UTMSpOr2S6Fs"
        }})
        .then((res)=>{
            if(res.ok){
                return res.json()
            }else{
                throw new Error ('Errore nel recupero dei commenti')
            }
        })
        .then((data)=>{
            console.log('fetch completata, commenti recuperati', data)
            this.setState({
                comments:data
            })
        })
        .catch((err)=>{
            console.log('Errore nella fetch',err)
        })
    
}


    render (){
        return (
            <Container>
                <Row>
                    <Col>
                        <CommentList comments={this.state.comments}/>
                        <AddComment/>
                    </Col>
                </Row>
            </Container>
        )
    }
}
 
 
 
  



export default CommentArea