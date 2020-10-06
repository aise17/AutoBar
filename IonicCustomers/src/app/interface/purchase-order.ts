
export class PurchaseOrder {

constructor(id:number){
    this.user = id;
}

    user: number;
    product?: Product[];
    ok?: boolean;
    error?: string;
}

export class Product{
    id: number;
}
