import { PathReference } from "angularfire2/database";

export class Order {
    public static collectionName: PathReference = "Orders";
    customerName: string;
    place: string;
    count: number;
    address: string;
    constructor() {
        this.customerName = "test";
        this.place = "kaloor";
        this.address = "some big address";
    }
}