export class find_one_user_response_dto {
    id: string;
    name: string;
    isSeller: boolean;
    createdAt: Date;
    isActive: boolean;
    products: {
        number: number;
        name: string;
        des: string;
        price: number;
        stock: number;
    }[];
}