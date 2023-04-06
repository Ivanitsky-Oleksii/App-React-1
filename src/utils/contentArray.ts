export type Product = {
    id:number
    title: string
    descriptions: string
    type: string
    capacity: string
    price: number
    image1:string
}

const contentArray: Product[] = [
    {
        id:1,
        title: 'My work 1',
        descriptions: 'T',
        type: 'p',
        capacity: '',
        price: 1200,
        image1:"image/11.JPG"
    },
    {
        id:2,
        title: 'i',
        descriptions: 'T',
        type: 'p',
        capacity: '',
        price: 1200,
        image1:"image/12.JPG"
    },
    {
        id:3,
        title: 'i',
        descriptions: 'T',
        type: 'p',
        capacity: '',
        price: 1200,
        image1:"image/13.JPG"
    },
    {
        id:4,
        title: 'i',
        descriptions: 'T',
        type: 'p',
        capacity: '',
        price: 1200,
        image1:"image/14.JPG"
    },
    {
        id:5,
        title: 'i',
        descriptions: 'T',
        type: 'p',
        capacity: '',
        price: 1200,
        image1:"image/15.JPG"
    },
    {
        id:6,
        title: 'i',
        descriptions: 'T',
        type: 'p',
        capacity: '',
        price: 1200,
        image1:"image/16.JPG"
    },
    {
        id:7,
        title: 'i',
        descriptions: 'T',
        type: 'p',
        capacity: '',
        price: 1200,
        image1:"image/17.JPG"
    },
    {
        id:8,
        title: 'i',
        descriptions: 'T',
        type: 'p',
        capacity: '',
        price: 1200,
        image1:"image/18.JPG"
    },
    {
        id:9,
        title: 'i',
        descriptions: 'T',
        type: 'p',
        capacity: '',
        price: 1200,
        image1:"image/19.JPG"
    },
    {
        id:10,
        title: 'i',
        descriptions: 'T',
        type: 'p',
        capacity: '',
        price: 1200,
        image1:"image/20.JPG"
    },
    {
        id:11,
        title: 'i',
        descriptions: 'T',
        type: 'p',
        capacity: '',
        price: 1200,
        image1:"image/21.JPG"
    },
    {
        id:12,
        title: 'i',
        descriptions: 'T',
        type: 'p',
        capacity: '',
        price: 1200,
        image1:"image/22.JPG"
    },
    {
        id:13,
        title: 'i',
        descriptions: 'T',
        type: 'p',
        capacity: '',
        price: 1200,
        image1:"image/23.JPG"
    },
    {
        id:14,
        title: 'i',
        descriptions: 'T',
        type: 'p',
        capacity: '',
        price: 1200,
        image1:"image/24.JPG"
    },
    {
        id:14,
        title: 'i',
        descriptions: 'T',
        type: 'p',
        capacity: '',
        price: 1200,
        image1:"image/25.JPG"
    },
    {
        id:14,
        title: 'i',
        descriptions: 'T',
        type: 'p',
        capacity: '',
        price: 1200,
        image1:"image/26.JPG"
    },
    
]



export const getProductsObject = (array:Product[]) =>
array.reduce((object,product) => ({...object,[product.id]:product,}),{})

export default contentArray