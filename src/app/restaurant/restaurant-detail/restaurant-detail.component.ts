import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Restaurant } from "~/app/restaurant/models/Restaurant";
import { RestaurantService } from "~/app/restaurant/restaurant.service";

@Component({
    selector: "ns-details",
    templateUrl: "./restaurant-detail.component.html"
})
export class RestaurantDetailComponent implements OnInit {
    restaurant: Restaurant;

    constructor(
        private itemService: RestaurantService,
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        const id = +this.route.snapshot.params.id;
        this.restaurant = this.itemService.getItem(id);
    }

    alert() {
        console.log("button click");
    }
}
