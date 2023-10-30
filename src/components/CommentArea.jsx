import { Component } from "react";

import CommentList from "./CommentList";
import AddComment from "./AddComment";

class CommentArea extends Component {

    state={
        comments:[]
    }

componentDidMount = ()=>{
    this.getComments()
}
componentDidUpdate=(prevProps, prevState)=>{
    if(this.props.bookAsin !== prevProps.bookAsin){
        
            this.getComments();
        }
    }

    
       getComments = async ()=> {
        try {
            const response = await fetch('https://striveschool-api.herokuapp.com/api/comments/' + this.props.bookAsin,
            {headers:{
               Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNhNGE0ZmY2ZTNkZDAwMTQ5NWU0MzEiLCJpYXQiOjE2OTgzMTg5MjcsImV4cCI6MTY5OTUyODUyN30._xwcUTOVgkxDD63eq3PHcJQTanHrTR3UTMSpOr2S6Fs"
           }})
           if (response.ok) {
            const arrayOfComments = await response.json()
            this.setState({
                comments: arrayOfComments
            })
           }else{
            throw new Error ('Errore nel recupero dei commenti')
           }
            
        } catch (error) {
            console.log('Error', error)
        }
       }

    render () {
        return (
            
            <div>
                <div><CommentList reviews={this.state.comments}/></div>
                <div><AddComment bookId={this.props.bookAsin}/></div>
            </div>  
             
        )
    }}



export default CommentArea