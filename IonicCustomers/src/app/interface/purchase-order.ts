
export class PurchaseOrder {

constructor(id:number){
    this.user = id;
}

    user: number;
    product?: Product[];
    ok?: boolean;
    error?: string;
    mesa?: number;
}

export class Product{
    id: number;
}
