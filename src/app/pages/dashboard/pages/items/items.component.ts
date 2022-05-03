import { Component, OnInit } from '@angular/core';
import { AddCategoryComponent } from './add-category/add-category.component';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { ApiService } from 'src/app/utils/services/api.service';
import { LoaderService } from 'src/app/utils/services/loader.service';
import { ConfirmComponent } from 'src/app/components/confirm/confirm.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss'],
})
export class ItemsComponent implements OnInit {
  // categoryList: any[] = [
  //   {
  //     category_id: 1,
  //     category_name: 'Lunch',
  //     category_desc: 'lorem ipsum',
  //   },
  //   {
  //     category_id: 1,

  //     category_name: 'Breakfast',
  //     category_desc: 'lorem ipsum',
  //   },
  //   {
  //     category_id: 1,

  //     category_name: 'Dinner',
  //     category_desc: 'lorem ipsum',
  //   },
  // ];
  dataSource: any[] = [];
  displayedColumns: any[] = ['_id', 'name', 'desc', 'action'];
  constructor(
    private _dialog: MatDialog,
    private _apiService: ApiService,
    private _loaderService: LoaderService
  ) {
    this.getAllCategories();
  }

  deleteCategory(catid: string) {
    let dialogRef = this._dialog.open(ConfirmComponent, {
      width: '300px',
      hasBackdrop: false,
    });
    dialogRef.afterClosed().subscribe((data) => {
      if (data) {
        this._loaderService.updateLoader(true);
        //Execute the function of delete
        this._apiService.deleteCategory(catid).subscribe((data) => {
          console.log(data);
          this.getAllCategories();
        });
      }
    });
  }

  addCategory() {
    let dialogRef = this._dialog.open(AddCategoryComponent, {
      width: '300px',
      hasBackdrop: false,
    });
    dialogRef.afterClosed().subscribe(() => {
      this.getAllCategories();
    });
  }

  editCategory(data: any) {
    let dialogRef = this._dialog.open(EditCategoryComponent, {
      width: '300px',
      hasBackdrop: false,
      data: data,
    });
    dialogRef.afterClosed().subscribe(() => {
      this.getAllCategories();
    });
  }

  getAllCategories() {
    this._loaderService.updateLoader(true);
    this._apiService.getAllCategories().subscribe((data: any) => {
      console.log('Catogories', data);
      this._loaderService.updateLoader(false);
      this.dataSource = data.categories;
    });
  }

  ngOnInit(): void {
    // this.getAllCategories();\
  }
}
