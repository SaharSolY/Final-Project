import { LanguagesType } from "./Languages";
import { TranslateWord } from "./TranslateWord";

export class Category {
    Category: TranslateWord[] = [];
    lastUpdate: Date;
    edited: boolean = false;

    constructor(public name: string, public id: number, public languages: LanguagesType, public ListWords: TranslateWord[], lastUpdate: Date = new Date()) {
        this.lastUpdate = lastUpdate; 
    }
}