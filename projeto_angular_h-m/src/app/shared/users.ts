import { User } from "./user.type";

export const users: User[] = [
    {
        "id": 0,
        "name": "Nuno Miguel",
        "email": "mail@mail.com",
        "password": "12345678",
        "address": "Rua Zero",
        "postcode": "0000-000",
        "country": "Portugal",
        "wishlist_productsid": [1, 3, 5]
    },
    {
        "id": 1,
        "name": "João Miguel",
        "email": "mail@mail.com",
        "password": "12345678",
        "address": "Rua Um",
        "postcode": "1111-111",
        "country": "Espanha",
        "wishlist_productsid": []
    },
    {
        "id": 2,
        "name": "Pedro Miguel",
        "email": "mail@mail.com",
        "password": "12345678",
        "address": "Rua Dois",
        "postcode": "2222-222",
        "country": "Itália",
        "wishlist_productsid": []
    }
]