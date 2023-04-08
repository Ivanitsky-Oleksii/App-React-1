export type Product = {
    id: number
    title: string
    descriptions: string
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
        title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit quidem, voluptates accusamus veritatis dolore asperiores tempora labore aspernatur ipsa vero iusto voluptate! Facilis ratione amet consequatur recusandae nobis eaque natus.',
        descriptions: ' bla bla bla ',
        type: 'wowowowoowow',
        capacity: '',
        price: 1200,
        image1: 'image/14.png',
        image2: 'image/15.png',
        image3: 'image/16.png',
    },
    {
        id: 2,
        title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit quidem, voluptates accusamus veritatis dolore asperiores tempora labore aspernatur ipsa vero iusto voluptate! Facilis ratione amet consequatur recusandae nobis eaque natus.',
        descriptions: ' bla bla bla ',
        type: 'wowowowoowow',
        capacity: '',
        price: 1200,
        image1: 'image/17.png',
        image2: 'image/18.png',
        image3: 'image/19.png',
    },
    {
        id: 3,
        title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit quidem, voluptates accusamus veritatis dolore asperiores tempora labore aspernatur ipsa vero iusto voluptate! Facilis ratione amet consequatur recusandae nobis eaque natus.',
        descriptions: ' bla bla bla ',
        type: 'wowowowoowow',
        capacity: '',
        price: 1200,
        image1: 'image/20.png',
        image2: 'image/21.png',
        image3: 'image/22.png',
    },
    {
        id: 4,
        title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit quidem, voluptates accusamus veritatis dolore asperiores tempora labore aspernatur ipsa vero iusto voluptate! Facilis ratione amet consequatur recusandae nobis eaque natus.',
        descriptions: ' bla bla bla ',
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