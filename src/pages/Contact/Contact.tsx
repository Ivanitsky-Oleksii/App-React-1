import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import logocard from 'assets/30.png'
import 'pages/Contact/Contact.scss'


type Props = {}

const Contact = (props: Props) => {
    return (
        <div className='card-contact'>
            <Card className='contact'>
                <Card.Img
                    variant="top"
                    src={logocard}
                />
                <Card.Body>
                    <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>Cras justo odio</ListGroup.Item>
                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                    <Card.Link href="https://www.instagram.com/nemuse.tatz/"><img style={{width:'50px',height:'50px'}} src='image/inst.png'alt='inst'></img></Card.Link>
                    <Card.Link href="https://t.me/ellisday"><img style={{width:'50px',height:'50px'}} src='image/teleg.png'alt='teleg'></img></Card.Link>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Contact
