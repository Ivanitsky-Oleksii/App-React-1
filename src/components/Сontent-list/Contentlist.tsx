import ContentListItem from "components/ContentListItem/ContentListItem"
import contentArray from "utils/contentArray"

type Props = {}

const Contentlist = (props: Props) => {
return (
    <>
        {contentArray.map(
            ({
                id,
                title,
                descriptions1,
                descriptions2,
                descriptions3,
                type,
                capacity,
                price,
                image1,
                image2,
                image3,
            }) => (
                <ContentListItem
                    id={id}
                    title={title}
                    descriptions1={descriptions1}
                    descriptions2={descriptions2}
                    descriptions3={descriptions3}
                    type={type}
                    capacity={capacity}
                    price={price}
                    image1={image1}
                    image2={image2}
                    image3={image3}
                />
            )
        )}
    </>
)
}

export default Contentlist