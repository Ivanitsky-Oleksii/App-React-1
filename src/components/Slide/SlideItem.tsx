import Carousel from 'react-bootstrap/Carousel';
import 'components/Slide/SlideItem.scss'

type Props = {
    id: number
    title: string
    descriptions: string
    image1:string
    image2:string
    }

const SlideItem = ({id,
    title,
    descriptions,
    image1,image2}: Props) => {
return (
    <>
    <Carousel className='car'>
    <Carousel.Item>
    <img
        className="d-block w-100"
        src={image1}
        alt="First slide"
        />
        <Carousel.Caption>
        <h3>{title}</h3>
        <p>{descriptions}</p>
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
        <img
        className="d-block w-100"
        src={image2}
        alt="Second slide"
        />

        <Carousel.Caption>
        <h3>{title}</h3>
        <p>{descriptions}</p>
        </Carousel.Caption>
    </Carousel.Item>
    </Carousel>
    </>
)
}

export default SlideItem