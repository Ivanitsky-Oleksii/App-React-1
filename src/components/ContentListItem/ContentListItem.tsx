
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup'



type Props = {
    id: number
    title: string
    descriptions: string
    type: string
    capacity: string
    price: number
    image1: string
    image2: string
    image3: string
}

const ContentlistItem = ({
    title,
    descriptions,
    type,
    image1,image2,image3}: Props) => {
return (
    <>
        <Container>
            <CardGroup style={{marginTop:'15px'}}>
                <Card >
                    <Card.Img
                        variant="top"
                        src={image1}
                        style={{ height: '550px'}}
                    />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a
                            natural lead-in to additional content. This content
                            is a little bit longer.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">
                            Last updated 3 mins ago
                        </small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img
                        variant="top"
                        src={image2}
                        style={{ height: '550px' }}
                    />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This card has supporting text below as a natural
                            lead-in to additional content.{' '}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">
                            Last updated 3 mins ago
                        </small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img
                        variant="top"
                        src={image3}
                        style={{ height: '550px' }}
                    />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a
                            natural lead-in to additional content. This card has
                            even longer content than the first to show that
                            equal height action.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">
                            Last updated 3 mins ago
                        </small>
                    </Card.Footer>
                </Card>
            </CardGroup>
        </Container>
    </>
)
}

export default ContentlistItem