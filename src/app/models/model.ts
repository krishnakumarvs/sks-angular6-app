import { PathReference } from "angularfire2/database";

export class Order {
    public static collectionName: PathReference = "Orders";
    customerName: string;
    place: string;
    count: number;
    address: string;
    constructor() {
        this.customerName = "Rahul Thomas";
        this.place = "Thrissur";
        this.address = "Some big address";
        this.count = 250;
    }
}