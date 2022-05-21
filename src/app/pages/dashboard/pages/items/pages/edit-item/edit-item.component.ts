import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/app/utils/services/api.service';
import { LoaderService } from 'src/app/utils/services/loader.service';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.scss'],
})
export class EditItemComponent implements OnInit {
  itemForm: FormGroup = new FormGroup({});

  constructor(
    @Inject(MAT_DIALOG_DATA) public idata: any,
    private _apiService: ApiService,
    private _loaderService: LoaderService,
    private _matDialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.itemForm = new FormGroup({
      name: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      desc: new FormControl(''),
    });
    console.log('idata ', this.idata);
    this.itemForm.patchValue({
      name: this.idata.data.name,
      desc: this.idata.data.desc,
      price: this.idata.data.price,
    });
  }

  onSubmit() {
    console.log('values ', this.itemForm.value);
    this._loaderService.updateLoader(true);
    this._apiService
      .updateItem(this.itemForm.value, this.idata.data._id)
      .subscribe((response: any) => {
        console.log('Response ', response);
        this._loaderService.updateLoader(false);
        this._matDialog.closeAll();
      });
  }
}
