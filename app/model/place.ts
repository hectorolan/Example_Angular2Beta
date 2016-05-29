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
    
    static equal(p1: Place, p2: Place): boolean{
        if (p1.name != p2.name) {
            return false;
        }
        if (p1.city != p2.city){
            return false;
        }
        if (p1.image != p2.image){
            return false;
        }
        if (p1.category != p2.category){
            return false;
        }
        if (p1.type != p2.type){
            return false;
        }
        if (p1.phoneNumber != p2.phoneNumber){
            return false;
        }
        if (p1.userId != p2.userId){
            return false;
        }
        return true;
    }
}