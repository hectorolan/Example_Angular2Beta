import {Links} from '../model/links';

export class Place {
    id: number;
    name: string;
    city: string;
    image: string;
    category: string;
    type: string;
    phoneNumber: string;
    userId: number;
    links: Links;
    dateModified: string;
}