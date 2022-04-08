import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss'],
})
export class ItemsComponent implements OnInit {
  categoryList: any[] = [
    {
      category_id: 1,
      category_name: 'Lunch',
      category_desc: 'lorem ipsum',
    },
    {
      category_id: 1,

      category_name: 'Breakfast',
      category_desc: 'lorem ipsum',
    },
    {
      category_id: 1,

      category_name: 'Dinner',
      category_desc: 'lorem ipsum',
    },
  ];
  dataSource: any[] = [];
  displayedColumns: any[] = ['category_id', 'category_name', 'category_desc'];
  constructor() {}

  ngOnInit(): void {
    this.dataSource = this.categoryList;
  }
}
