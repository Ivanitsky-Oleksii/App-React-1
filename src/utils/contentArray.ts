export type Product = {
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

const contentArray: Product[] = [
    {
        id: 1,
        title: 'Latest works',
        descriptions1: ' 01/02/2023 ',
        descriptions2: ' 21/01/2023 ',
        descriptions3: ' 10/01/2023 ',
        type: 'wowowowoowow',
        capacity: '',
        price: 1200,
        image1: 'image/14.png',
        image2: 'image/15.png',
        image3: 'image/16.png',
    },
    {
        id: 2,
        title: 'Latest works',
        descriptions1: ' 31/01/2023 ',
        descriptions2: ' 22/12/2022 ',
        descriptions3: ' 15/11/2022 ',
        type: 'wowowowoowow',
        capacity: '',
        price: 1200,
        image1: 'image/17.png',
        image2: 'image/18.png',
        image3: 'image/19.png',
    },
    {
        id: 3,
        title: 'Latest works',
        descriptions1: ' 31/01/2023 ',
        descriptions2: ' 22/12/2022 ',
        descriptions3: ' 15/11/2022 ',
        type: 'wowowowoowow',
        capacity: '',
        price: 1200,
        image1: 'image/20.png',
        image2: 'image/21.png',
        image3: 'image/22.png',
    },
    {
        id: 4,
        title: 'Latest works',
        descriptions1: ' 31/01/2023 ',
        descriptions2: ' 22/12/2022 ',
        descriptions3: ' 15/11/2022 ',
        type: 'wowowowoowow',
        capacity: '',
        price: 1200,
        image1: 'image/23.png',
        image2: 'image/24.png',
        image3: 'image/25.png',
    }
]



export const getProductsObject = (array:Product[]) =>
array.reduce((object,product) => ({...object,[product.id]:product,}),{})

export default contentArray