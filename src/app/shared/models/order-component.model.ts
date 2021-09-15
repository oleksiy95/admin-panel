import { Product } from "./product.model";


export class OrderComponent {
    public id: number;
    public description: string;
    public updatedDate: Date;
    public createdDate: Date;
    public number: number;
    public totalPrice: number;
    public productId: number;
    public product: Product;
    public orderItemId: number;
}
