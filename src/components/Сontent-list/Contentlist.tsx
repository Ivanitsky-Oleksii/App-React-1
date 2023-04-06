import ContentListItem from "components/ContentListItem/ContentListItem"
import contentArray from "utils/contentArray"

type Props = {}

const Contentlist = (props: Props) => {
return (
    <>
    {contentArray.map(({id,title,descriptions,type,capacity,price,image1}) => (<ContentListItem 
                        id={id}
                        title={title}
                        descriptions={descriptions}
                        type={type}
                        capacity={capacity}
                        price={price}
                        image1={image1}
                    />))}
    </>
)
}

export default Contentlist