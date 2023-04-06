export type Product = {
    id:number
    title: string
    descriptions: string
    image1:string
    image2:string
    image3:string
}

const slideArray: Product[] = [
    {
        id:1,
        title: 'ги ги',
        descriptions: 'ги',
        image1:"image/7.jpg",
        image2:"image/8.jpg",
        image3:"image/9.jpg",
    },
]



export const getProductsObject = (array:Product[]) =>
array.reduce((object,product) => ({...object,[product.id]:product,}),{})

export default slideArray