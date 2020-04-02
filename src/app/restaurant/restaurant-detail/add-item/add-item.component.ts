import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { RestaurantService } from "~/app/restaurant/restaurant.service";
import { Person } from "../../models/Person";
import { EventData } from "tns-core-modules/data/observable";
import { ListPicker } from "tns-core-modules/ui/list-picker";
import { MenuItem } from "../../models/MenuItem";
import { Opinions, Opinion } from "../../models/Opinions";

@Component({
    selector: "ns-add-item",
    templateUrl: "./add-item.component.html"
})
export class AddItemComponent implements OnInit {
    // restaurant: Restaurant;
    restaurantId: number;
    people: Array<Person>;
    opinions: Array<Opinion>;

    itemName: string = 'slugs';
    selectedPerson: Person;
    selectedOpinion: Opinion;
    // likedIt: boolean = false;

    constructor(
        private itemService: RestaurantService,
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        this.restaurantId = +this.route.snapshot.params.id;
        //TODO: Should maybe pass the name of the restaurant in or something?
        // this.restaurant = this.itemService.getItem(id);
        this.itemService.getPeople().subscribe(p => this.people = p);
        this.opinions = [
            { id: 1, name: "Liked" },
            { id: 2, name: "Didn't like" },
        ]
        // this.itemService.getOpinionOptions().subscribe(o => this.opinions = o);
    }

    public onPersonChanged(args: EventData) {
        this.selectedPerson = this.people[(<ListPicker> args.object).selectedIndex];
    }

    public onOpinionChanged(args: EventData) {
        this.selectedOpinion = this.opinions[(<ListPicker> args.object).selectedIndex];
    }

    submit(): void{
        const menuItem = new MenuItem(this.itemName, this.selectedPerson, this.selectedOpinion);
        console.log(this.selectedPerson.name);
        this.itemService.addItem(this.restaurantId, menuItem).subscribe(result =>
            console.log(result));
    }
}
