import { Product } from './product';

export interface Orders {
    id: number;
    user_id: 1;
    creation_date: string;
    mesa_id: number;
    address_id: string;
    orders_status_barra: boolean;
    products: Product[];
    orders_status_cocina: boolean;
}
