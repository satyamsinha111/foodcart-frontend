import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/app/utils/services/api.service';
import { LoaderService } from 'src/app/utils/services/loader.service';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.scss'],
})
export class EditCategoryComponent implements OnInit {
  categoryForm: FormGroup = new FormGroup({});
  constructor(
    private _loaderService: LoaderService,
    private _apiService: ApiService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _matDialog: MatDialog
  ) {}

  ngOnInit(): void {
    console.log('Dialog data ', this.data);
    this.categoryForm = new FormGroup({
      name: new FormControl('', Validators.required),
      desc: new FormControl('', Validators.required),
    });
    this.categoryForm.patchValue({
      name: this.data.name,
      desc: this.data.desc,
    });
  }

  onSubmit() {
    this._loaderService.updateLoader(true);
    this._apiService
      .updateCategory(this.categoryForm.value, this.data._id)
      .subscribe((data) => {
        this._loaderService.updateLoader(false);
        this._matDialog.closeAll();
      });
  }
}
