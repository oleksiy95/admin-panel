import { DeliveryType, OrderStatus, PaymentType, PromotionType } from "../enums";
import { OrderItem } from "./order-item.model";
import { Payment } from "./payment.model";
import { User } from "./user.model";

export class Order {
    public id: number;
    public description: string;
    public updatedDate: Date;
    public createdDate: Date;
    public applicationUserId: string
    public user: User
    public paymentType: PaymentType;
    public deliveryType: DeliveryType;
    public status: OrderStatus;
    public totalPrice: number;
    public comment: string;
    public name: string;
    public phone: string;
    public street: string;
    public number: string;
    public payment: Payment;
    public paymentId: number;
    public items: OrderItem[];
    public promotion: PromotionType
}
