export interface IProducts {
  name: string;
  price: number;
}

export interface IRealPriceProduct extends IProducts {
  realPrice: number
}

export const listProducts: IProducts[] = [
  { price: 100, name: 'food' },
  { price: 1500, name: 'tv' },
  { price: 800, name: 'smart phone' }
]
