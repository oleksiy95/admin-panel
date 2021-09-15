import { Order } from "./order.model";

export class User {
    public id: string;
    public description: string;
    public updatedDate: Date;
    public createdDate: Date;
    public firstName: string;
    public lastName: string;
    public city: string;
    public street: string;
    public buildingNumber: string; 
    public entrance: string;
    public floor: number;
    public flat: number;
    public orders: Order[];
    public phoneNumber: string;
    public userName: string;
    public email: string;    
}
