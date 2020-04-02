import { Person } from "./Person";
import { Opinion } from "./Opinions";

export class MenuItem {

    constructor(name: string, person: Person, opinion: Opinion){
        this.name = name;
        this.person = person;
        this.opinion = opinion;
        this.sentenceForm = `${this.person.name} ${this.opinion} the ${this.name} `;
    }

    person: Person;
    name: string;
    opinion: Opinion;
    sentenceForm: string;
}
