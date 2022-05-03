import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss'],
})
export class AddItemComponent implements OnInit {
  itemForm: FormGroup = new FormGroup({});
  constructor() {}

  ngOnInit(): void {
    this.itemForm = new FormGroup({
      name: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      desc: new FormControl(''),
    });
  }

  onSubmit() {}
}
