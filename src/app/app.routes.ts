import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ItemUpdateComponent } from './item-update/item-update.component';
import { ItemViewComponent } from './item-view/item-view.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    //ruta raiz
    {path:'',component:HomeComponent},
    {path:'app-item-view/:id',component:ItemViewComponent},
    {path:'app-item-update/:id',component:ItemUpdateComponent}
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{

}
