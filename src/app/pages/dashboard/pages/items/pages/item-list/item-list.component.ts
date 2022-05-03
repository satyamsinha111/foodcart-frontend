import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/utils/services/api.service';
import { LoaderService } from 'src/app/utils/services/loader.service';
import { AddItemComponent } from '../add-item/add-item.component';
import { EditItemComponent } from '../edit-item/edit-item.component';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss'],
})
export class ItemListComponent implements OnInit {
  categoryid: string | any = '';
  itemList: any[] = [
    {
      item_id: 1,
      item_name: 'Lunch',
      item_desc: 'lorem ipsum',
    },
    {
      item_id: 1,

      item_name: 'Breakfast',
      item_desc: 'lorem ipsum',
    },
    {
      item_id: 1,

      item_name: 'Dinner',
      item_desc: 'lorem ipsum',
    },
  ];
  dataSource: any[] = [];
  displayedColumns: any[] = ['item_id', 'item_name', 'item_desc', 'action'];

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
    this.dataSource = this.itemList;
  }

  onAddItem() {
    let dialogRef = this._dialog.open(AddItemComponent, {
      width: '300px',
      hasBackdrop: false,
    });
    dialogRef.afterClosed().subscribe((data) => {
      this.getItemList();
    });
  }

  getItemList() {
    this._loaderService.updateLoader(true);
    this._apiService.getItemsByCategory(this.categoryid).subscribe((data) => {
      this._loaderService.updateLoader(false);
      console.log(data);
    });
  }
}
