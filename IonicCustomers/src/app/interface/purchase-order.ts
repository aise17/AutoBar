import { Direccion } from './direccion';

export class PurchaseOrder {

constructor(id:number){
    this.user = id;
}
    id?: number
    user: number;
    product?: Product[];
    ok?: boolean;
    error?: string;
    mesa?: number;
    address?: Direccion;
}

export class Product{
    id: number;
}
