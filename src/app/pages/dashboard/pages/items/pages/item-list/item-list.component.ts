import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss'],
})
export class ItemListComponent implements OnInit {
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

  constructor() {}

  ngOnInit(): void {
    this.dataSource = this.itemList;
  }
}
