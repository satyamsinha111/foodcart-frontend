import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/app/utils/services/api.service';
import { LoaderService } from 'src/app/utils/services/loader.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss'],
})
export class AddItemComponent implements OnInit {
  itemForm: FormGroup = new FormGroup({});
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _apiService: ApiService,
    private _loaderService: LoaderService
  ) {}

  ngOnInit(): void {
    console.log(this.data);
    this.itemForm = new FormGroup({
      name: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      desc: new FormControl(''),
    });
  }

  onSubmit() {
    console.log(this.itemForm.value);
    let payloadObj: any = {};
    Object.assign(payloadObj, this.itemForm.value);
    payloadObj['catid'] = this.data;
    this._loaderService.updateLoader(true);
    this._apiService.addNewItem(payloadObj).subscribe((data) => {
      console.log(data);
      this._loaderService.updateLoader(false);
    });
  }
}
