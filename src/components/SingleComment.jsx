import { ListGroup } from "react-bootstrap"

const SingleComment = ({singleReview})=> {
    return (
        <ListGroup.Item>{singleReview.rate} | {singleReview.comment}
        </ListGroup.Item>
    )
}

export default SingleComment