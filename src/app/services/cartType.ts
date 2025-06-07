export interface cartType {
    date:String,
    id:number,
    products: [{ productId: number, quantity: number }]
    userId:number,
  }