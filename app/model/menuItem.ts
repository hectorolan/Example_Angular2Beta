import {Links} from '../model/links';

export class MenuItem {
	id: number;
    placeId: number;
    name: string;
    content: string;
    ingredients: string[];
    price: number;
    image: string;
    category: string;
    remark: string;
    calories: string;
    available: boolean;
    links: Links;
}