import { MenuItem } from "./MenuItem";

export interface Restaurant {
    id: number;
    name: string;
    menuItems: MenuItem[];
}
