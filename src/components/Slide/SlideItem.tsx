import Carousel from 'react-bootstrap/Carousel';

type Props = {
    id: number
    title: string
    descriptions: string
    type: string
    capacity: string
    price:number
    image1:string
    image2:string
    image3:string}

const SlideItem = ({id,
    title,
    descriptions,
    type,
    capacity,
    price,
    image1,image2,image3}: Props) => {
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
        <h3>''</h3>
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
        <h3>''</h3>
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
        <h3>''</h3>
        <p></p>
        </Carousel.Caption>
    </Carousel.Item>
    </Carousel>
    </>
)
}

export default SlideItem