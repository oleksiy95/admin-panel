import { PaymentStatus, PaymentType } from "../enums";

export class Payment {
    public id: number;
    public description: string;
    public updatedDate: Date;
    public createdDate: Date;
    public amount: number;
    public status: PaymentStatus;
    public type: PaymentType;
}
