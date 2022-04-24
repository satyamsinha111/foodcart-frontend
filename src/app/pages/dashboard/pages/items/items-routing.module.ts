import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemsComponent } from './items.component';

const routes: Routes = [
  { path: '', component: ItemsComponent },
  {
    path: 'category-list',
    loadChildren: () =>
      import('./pages/category-list/category-list.module').then(
        (m) => m.CategoryListModule
      ),
  },
  {
    path: ':itemid',
    loadChildren: () =>
      import('./pages/item-list/item-list.module').then(
        (m) => m.ItemListModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItemsRoutingModule {}
