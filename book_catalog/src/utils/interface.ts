export interface BookModel{
    _id:string;
    bid:number;
    book_name:string;
    book_author:string;
    book_type:string;
    book_qty:number;
    book_price:number;
    book_image:Buffer;
}

export interface OrderModel{
    _id:string;
    oid:number;
    customer_name:string;
    itemList:object;
    orderDate:Date
}