import 'pages/Home/Home.scss'
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';




type Props = {
    id: number
    title: string
    descriptions: string
    type: string
    capacity: string
    price:number
    image1:string}

const ContentlistItem = ({
    id,
    title,
    descriptions,
    type,
    capacity,
    price,
    image1}: Props) => {
return (
    <>
    {/* <Carousel>
    <Carousel.Item>
    <img
        className="d-block w-100"
        src=''
        alt="First slide"
        />
        <Carousel.Caption>
        <h3>''</h3>
        <p></p>
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
        <img
        className="d-block w-100"
        src=''
        alt="Second slide"
        />

        <Carousel.Caption>
        <h3>''</h3>
        <p></p>
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
        <img
        className="d-block w-100"
        src=''
        alt="Third slide"
        />
        <Carousel.Caption>
        <h3>''</h3>
        <p></p>
        </Carousel.Caption>
    </Carousel.Item>
    </Carousel> */}
    {/* //////////////////////////////////////////////////////////////////////////////////// */}
    <Container >
    <Card className="bg-dark text-white">
    <Card.Img src={image1} alt="image" />
    <Card.ImgOverlay>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{descriptions}</Card.Text>
        <Card.Text>{type}</Card.Text>
    </Card.ImgOverlay>
    </Card>
    </Container>
    </>
)
}

export default ContentlistItem