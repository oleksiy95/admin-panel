import { ProductType } from "../enums";

export class Product {
    public id: number;
    public description: string;
    public updatedDate: Date;
    public createdDate: Date;
    public name: string;
    public price: number;
    public weight: number;
    public image: string;
    public type: ProductType;
    public forbidComponents: boolean;
    public order: number;
}
