import './Home.scss'
import Carousel from 'react-bootstrap/Carousel';
import image1 from 'assets/image/7.jpg'
import image2 from 'assets/image/8.jpg'
import image3 from 'assets/image/9.jpg'

type Props = {}

function Home({}: Props) {
    return (
    <>
    <Carousel>
    <Carousel.Item>
    <img
        className="d-block w-100"
        src={image1}
        alt="First slide"
        />
        <Carousel.Caption>
        <h3>Hello</h3>
        <p></p>
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
        <img
        className="d-block w-100"
        src={image2}
        alt="Second slide"
        />

        <Carousel.Caption>
        <h3>Hello</h3>
        <p></p>
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
        <img
        className="d-block w-100"
        src={image3}
        alt="Third slide"
        />
        <Carousel.Caption>
        <h3>Hello</h3>
        <p></p>
        </Carousel.Caption>
    </Carousel.Item>
    </Carousel>
    
    </>
    
    )
}

export default Home
