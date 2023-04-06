import 'pages/Home/Home.scss'
import Container from 'react-bootstrap/Container';
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
    title,
    descriptions,
    type,
    image1}: Props) => {
return (
    <>
    <Container >
    <Card className="bg-dark text-white" style={{marginTop:'10px'}}>
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