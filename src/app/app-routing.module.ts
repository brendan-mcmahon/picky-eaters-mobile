import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { RestaurantsComponent } from "./restaurant/restaurants.component";
import { RestaurantDetailComponent } from "~/app/restaurant/restaurant-detail/restaurant-detail.component";
import { AddItemComponent } from "./restaurant/restaurant-detail/add-item/add-item.component";

const routes: Routes = [
    { path: "", redirectTo: "/Restaurants", pathMatch: "full" },
    { path: "Restaurants", component: RestaurantsComponent },
    { path: "item/:id", component: RestaurantDetailComponent },
    { path: "addItem/:id", component: AddItemComponent}
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
