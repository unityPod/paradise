type ProductType = {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string
}

type CartProduct = {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    amount: number
}

export {ProductType, CartProduct};