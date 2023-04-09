
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
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            {descriptions}
                        </Card.Text>
                    </Card.Body>  
                </Card>
                <Card>
                    <Card.Img
                        variant="top"
                        src={image2}
                        style={{ height: '550px' }}
                    />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                        {descriptions}
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img
                        variant="top"
                        src={image3}
                        style={{ height: '550px' }}
                    />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                        {descriptions}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>
        </Container>
    </>
)
}

export default ContentlistItem