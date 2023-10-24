import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import fantasy from '../Books/fantasy.json'
import history from '../Books/history.json'
import horror from '../Books/horror.json'
import romance from '../Books/romance.json'
import scifi from '../Books/scifi.json'


const AllTheBooks = ()=>{
    return (
        <Container fluid>
            <h2 className='mt-4'>Top libri Fantasy</h2>
            <Row className='justify-content-center'>
                
        
            {
                fantasy.map((book,index )=> {
                    if(index < 6){
                    return (
                        <Col key={book.asin} md={4} xl={2} className='mt-1'>
                    <Card className='h-100'>
                    <Card.Img variant="top" src={book.img} className='h-75'/>
                            <Card.Body>
                              <Card.Title className='text-nowrap text-truncate'>{book.title}</Card.Title>
                          <Card.Text>
                           {book.price}
                          </Card.Text>
                          <Button variant="primary">Compralo ora!</Button>
                        </Card.Body>
                        </Card>
                        </Col>
                    )}
                })
            }  
        </Row>

        <h2 className='mt-4'>Top libri Storici </h2>
        <Row className='justify-content-center'>
                
        
                {
                    history.map((book,index )=> {
                        if(index < 6){
                        return (
                            <Col key={book.asin} md={4} xl={2} className='mt-1'>
                        <Card className='h-100'>
                            <Card.Img variant="top" src={book.img} className='h-75'/>
                            <Card.Body>
                              <Card.Title className='text-nowrap text-truncate'>{book.title}</Card.Title>
                              <Card.Text>
                               {book.price}
                              </Card.Text>
                              <Button variant="primary">Compralo ora!</Button>
                            </Card.Body>
                            </Card>
                            </Col>
                        )}
                    })
                }  
            </Row>
            <h2 className='mt-4'> Top libri Horror</h2>
            <Row className='justify-content-center'>
                
        
                {
                    horror.map((book,index )=> {
                        if(index < 6){
                        return (
                            <Col key={book.asin} md={4} xl={2}>
                        <Card className='mt-1 h-100'>
                        <Card.Img variant="top" src={book.img} className='h-75'/>
                            <Card.Body>
                              <Card.Title className='text-nowrap text-truncate'>{book.title}</Card.Title>
                              <Card.Text>
                               {book.price}
                              </Card.Text>
                              <Button variant="primary">Compralo ora!</Button>
                            </Card.Body>
                            </Card>
                            </Col>
                        )}
                    })
                }  
            </Row>
            <h2 className='mt-4'>Top libri Romantici</h2>
            <Row >
                
        
                {
                    romance.map((book,index )=> {
                        if(index < 6){
                        return (
                            <Col key={book.asin} md={4} xl={2}>
                        <Card className='mt-1 h-100'>
                        <Card.Img variant="top" src={book.img} className='h-75'/>
                            <Card.Body>
                              <Card.Title className='text-nowrap text-truncate'>{book.title}</Card.Title>
                              <Card.Text>
                               {book.price}
                              </Card.Text>
                              <Button variant="primary">Compralo ora!</Button>
                            </Card.Body>
                            </Card>
                            </Col>
                        )}
                    })
                }  
            </Row>
            <h2 className='mt-4'>Top libri Fantasy</h2>
            <Row className='justify-content-center'>
                
        
                {
                    scifi.map((book,index )=> {
                        if(index < 6){
                        return (
                            <Col key={book.asin} md={4} xl={2}>
                        <Card className='mt-1 h-100'>
                        <Card.Img variant="top" src={book.img} className='h-75'/>
                            <Card.Body>
                              <Card.Title className='text-nowrap text-truncate'>{book.title}</Card.Title>
                              <Card.Text>
                               {book.price}
                              </Card.Text>
                              <Button variant="primary">Compralo ora!</Button>
                            </Card.Body>
                            </Card>
                            </Col>
                        )}
                    })
                }  
            </Row>

    </Container>
    )
}


export default AllTheBooks