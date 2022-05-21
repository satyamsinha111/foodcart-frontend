import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmComponent } from 'src/app/components/confirm/confirm.component';
import { ApiService } from 'src/app/utils/services/api.service';
import { LoaderService } from 'src/app/utils/services/loader.service';
import { AddItemComponent } from '../add-item/add-item.component';
import { DetailsComponent } from '../details/details.component';
import { EditItemComponent } from '../edit-item/edit-item.component';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss'],
})
export class ItemListComponent implements OnInit {
  categoryid: string | any = '';
  dataSource: any[] = [];
  displayedColumns: any[] = ['_id', 'name', 'desc', 'price', 'action'];

  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _apiService: ApiService,
    private _loaderService: LoaderService,
    private _dialog: MatDialog
  ) {
    this._activatedRoute.paramMap.subscribe((data) => {
      console.log(data.get(data.keys[0]));
      if (data.keys[0]) {
        this.categoryid = data.get(data.keys[0])?.toString();
        this.getItemList();
      }
    });
  }

  ngOnInit(): void {
    // this.dataSource = this.itemList;
  }

  deleteItem(itemid: string) {
    let dialogRef = this._dialog.open(ConfirmComponent, {
      width: '300px',
      hasBackdrop: false,
    });
    dialogRef.afterClosed().subscribe((data) => {
      if (data) {
        this._loaderService.updateLoader(true);
        //Execute the function of delete
        this._apiService.deleteItem(itemid).subscribe((data) => {
          console.log(data);
          this.getItemList();
        });
      }
    });
  }

  viewItem(data: any) {
    let dialogRef = this._dialog.open(DetailsComponent, {
      width: '300px',
      hasBackdrop: false,
      data: data,
    });
    dialogRef.afterClosed().subscribe((data) => {
      this.getItemList();
    });
  }

  onAddItem() {
    let dialogRef = this._dialog.open(AddItemComponent, {
      width: '300px',
      hasBackdrop: false,
      data: this.categoryid,
    });
    dialogRef.afterClosed().subscribe((data) => {
      this.getItemList();
    });
  }

  editItem(element: any) {
    let dialogRef = this._dialog.open(EditItemComponent, {
      width: '300px',
      hasBackdrop: false,
      data: {
        id: this.categoryid,
        data: element,
      },
    });
    dialogRef.afterClosed().subscribe((data) => {
      this.getItemList();
    });
  }

  getItemList() {
    this._loaderService.updateLoader(true);
    this._apiService
      .getItemsByCategory(this.categoryid)
      .subscribe((data: any) => {
        this._loaderService.updateLoader(false);
        console.log(data);
        this.dataSource = data.items;
      });
  }
}
