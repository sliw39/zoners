import { Routes } from "@angular/router";
import { CatalogComponent } from "./page/catalog/catalog.component";
import { DashboardComponent } from "./page/dashboard/dashboard.component";
import { CharacterListComponent } from "./characters/character-list/character-list.component";

export const ROUTES: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },

    { path: "catalog", component: CatalogComponent },
    { path: "characters", component: CharacterListComponent }
]