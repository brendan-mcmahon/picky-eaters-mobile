import { Component, OnInit } from "@angular/core";

import { Restaurant } from "~/app/restaurant/models/Restaurant";
import { RestaurantService } from "./restaurant.service";

@Component({
    selector: "ns-items",
    templateUrl: "./restaurants.component.html",
    styleUrls: ["./restaurants.component.css"]
})
export class RestaurantsComponent implements OnInit {
    items: Array<Restaurant>;

    constructor(private itemService: RestaurantService) { }

    ngOnInit(): void {
        this.itemService.getItems()
            .subscribe((result) => {
                console.log(`GET successful: ${result[0].name}`);
                this.items = result;
            });
    }
}
