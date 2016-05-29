import {Links} from '../model/links';

export class Schedule {
    id: number;
    placeId: number;
    type: string;
    mondayOpen: string;
    mondayClose: string;
    tuesdayOpen: string;
    tuesdayClose: string;
    wednesdayOpen: string;
    wednesdayClose: string;
    thursdayOpen: string;
    thursdayClose: string;
    fridayOpen: string;
    fridayClose: string;
    saturdayOpen: string;
    saturdayClose: string;
    sundayOpen: string;
    sundayClose: string;
    links: Links;

    constructor() {
        this.mondayOpen = "";
        this.mondayClose = "";
        this.tuesdayOpen = "";
        this.tuesdayClose = "";
        this.wednesdayOpen = "";
        this.wednesdayClose = "";
        this.thursdayOpen = "";
        this.thursdayClose = "";
        this.fridayOpen = "";
        this.fridayClose = "";
        this.saturdayOpen = "";
        this.saturdayClose = "";
        this.sundayOpen = "";
        this.sundayClose = "";
    }

    static equal(s1: Schedule, s2: Schedule): boolean {
        if (s1.sundayOpen && s2.sundayOpen) {
            if (s1.sundayOpen != s2.sundayOpen) {
                return false;
            }
        }
        if (s1.sundayClose != s2.sundayClose) {
            return false;
        }
        if (s1.mondayOpen != s2.mondayClose) {
            return false;
        }
        if (s1.mondayClose != s2.mondayClose) {
            return false;
        }
        if (s1.tuesdayOpen != s2.tuesdayOpen) {
            return false;
        }
        if (s1.tuesdayClose != s2.tuesdayClose) {
            return false;
        }
        if (s1.wednesdayOpen != s2.wednesdayOpen) {
            return false;
        }
        if (s1.wednesdayClose != s2.wednesdayClose) {
            return false;
        }
        if (s1.thursdayOpen != s2.thursdayOpen) {
            return false;
        }
        if (s1.thursdayClose != s2.thursdayClose) {
            return false;
        }
        if (s1.fridayOpen != s2.fridayOpen) {
            return false;
        }
        if (s1.fridayClose != s2.fridayClose) {
            return false;
        }
        if (s1.saturdayOpen != s2.saturdayOpen) {
            return false;
        }
        if (s1.saturdayClose != s2.saturdayClose) {
            return false;
        }
        return true;
    }
}