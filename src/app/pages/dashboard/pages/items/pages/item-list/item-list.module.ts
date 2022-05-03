import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemListRoutingModule } from './item-list-routing.module';
import { ItemListComponent } from './item-list.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ItemListComponent],
  imports: [
    CommonModule,
    ItemListRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatTableModule,
    MatMenuModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class ItemListModule {}
