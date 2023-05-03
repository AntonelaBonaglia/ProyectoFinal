export interface ProductoInterface{
    id: string;
    site_id: string;
    title:string ;
    seller_id: number | string;
    category_id:string;
    official_store_id:number;
    price:number ;
    base_price: number;
    thumbnail:string ; 
    catalog_listing:boolean;
    pictures: Picture[];
    seller_address:{
        id:string
    }
    attributes:[{
        [key:string]:string | number
    }];
    permalink:string;
    sold_quantity:number;
    plain_text:string;
}

export interface Picture{
    id:string;
    url:string
}