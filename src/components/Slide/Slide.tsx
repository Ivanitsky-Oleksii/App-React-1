import slideArray from "utils/slideArray"
import SlideItem from "./SlideItem"

type Props = {}

const Slide = (props: Props) => {

return (
    <>
    {slideArray.map(({id,title,descriptions,image1,image2,image3}) => (<SlideItem 
                        id={id}
                        title={title}
                        descriptions={descriptions}
                        image1={image1}
                        image2={image2}
                        image3={image3}
                    />))}
    </>
)
}

export default Slide