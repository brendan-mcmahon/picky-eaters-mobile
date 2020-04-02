import { Injectable } from "@angular/core";

import { Restaurant } from "~/app/restaurant/models/Restaurant";
import { Person } from "~/app/restaurant/models/Person";
import { MenuItem } from "~/app/restaurant/models/MenuItem";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";
import { Opinions } from "./models/Opinions";

@Injectable({
    providedIn: "root"
})
export class RestaurantService {

    brendan: Person = { name: "Brendan" };
    jamie: Person = { name: "Jamie" };

    private restaurants = new Array<Restaurant>(
        {id: 1, name: "Pizza King", menuItems: [new MenuItem("Tea", this.jamie, Opinions.likedIt)]},
        {id: 2, name: "Hana", menuItems: [
            new MenuItem("Seafood Pizza", this.brendan, Opinions.hatedIt),
            new MenuItem("Seafood Pizza", this.jamie, Opinions.likedIt)
        ]}
    );

    constructor(private http: HttpClient) { }

    getItems(): Observable<Array<Restaurant>>  {
        let headers = this.getHeaders();
        let oRestaurants = this.http.get<Array<Restaurant>>('https://picky-eaters-api.herokuapp.com/restaurants', { headers: headers });
        oRestaurants.subscribe(r => this.restaurants = r);
        return oRestaurants;
    }

    private getHeaders() {
        return new HttpHeaders({
            "AuthKey": "my-key",
            "AuthToken": "my-token",
            "Content-Type": "application/json",
        });
    }

    //TODO: Make getItems return just the list of restaurants and add a GetRestaurant(id) for the details on each?
    getItem(id: number): Restaurant {
        return this.restaurants.filter(r => r.id == id)[0];
    }

    getPeople(): Observable<Array<Person>> {
        let headers = this.getHeaders();
        return this.http.get<Array<Person>>('https://picky-eaters-api.herokuapp.com/people', { headers: headers });
        // return [this.brendan, this.jamie];
    }

    getOpinionOptions(): Observable<Array<string>> {
        let headers = this.getHeaders();
        return this.http.get<Array<string>>('https://picky-eaters-api.herokuapp.com/opinionOptions', { headers: headers });
    }

    addItem(restaurantId: number, menuItem: MenuItem): Observable<string> {
        var payload = { restaurantId: restaurantId, menuItem: menuItem };
        // console.log(payload);
        return this.http.post<string>('https://picky-eaters-api.herokuapp.com/addMenuItem', payload)
        // menuItem = new MenuItem("testItem", this.brendan, Opinions.likedIt);
        // this.restaurants.filter((item) => item.id === restaurantId)[0].menuItems = [...[menuItem]];
    }
}
