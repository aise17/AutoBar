import { Product } from './product';

export interface Category {

    id: number;
    products: Product[];
    name: string;
    publish: Date;
    publish_date: Date;
    creation_date: Date;
    modification_date: Date;
    unpublish_date: Date;


}
