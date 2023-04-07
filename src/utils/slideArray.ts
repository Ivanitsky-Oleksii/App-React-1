export type Product = {
    id:number
    title: string
    descriptions: string
    image1:string
    image2:string
}

const slideArray: Product[] = [
    {
        id:1,
        title: 'ги ги',
        descriptions: 'ги',
        image1:"image/s1.png",
        image2:"image/s2.png",
    },
]



export const getProductsObject = (array:Product[]) =>
array.reduce((object,product) => ({...object,[product.id]:product,}),{})

export default slideArray