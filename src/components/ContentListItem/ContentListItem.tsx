
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup'
import 'components/ContentListItem/ContentListItem.scss'


type Props = {
    id: number
    title: string
    descriptions1: string
    descriptions2: string
    descriptions3: string
    type: string
    capacity: string
    price: number
    image1: string
    image2: string
    image3: string
}

const ContentlistItem = ({
    title,
    descriptions1,
    descriptions2,
    descriptions3,
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
                        <Card.Title className='title'>{title}</Card.Title>
                        <Card.Text className='text'>
                            {descriptions1}
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
                        <Card.Title className='title'>{title}</Card.Title>
                        <Card.Text className='text'>
                        {descriptions2}
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
                        <Card.Title className='title'>{title}</Card.Title>
                        <Card.Text className='text'>
                        {descriptions3}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>
        </Container>
    </>
)
}

export default ContentlistItem