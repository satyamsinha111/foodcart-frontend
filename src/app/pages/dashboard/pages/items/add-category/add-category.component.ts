import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/app/utils/services/api.service';
import { LoaderService } from 'src/app/utils/services/loader.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss'],
})
export class AddCategoryComponent implements OnInit {
  categoryForm: FormGroup = new FormGroup({});
  constructor(
    private _loaderService: LoaderService,
    private _apiService: ApiService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _matDialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.categoryForm = new FormGroup({
      name: new FormControl('', Validators.required),
      desc: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    this._loaderService.updateLoader(true);
    this._apiService.addCategory(this.categoryForm.value).subscribe((data) => {
      console.log(data);
      this._loaderService.updateLoader(false);
      this._matDialog.closeAll();
    });
  }
}
