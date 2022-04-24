import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  userList: any[] = [
    {
      user_id: 1,
      user_name: 'Lunch',
      user_desc: 'lorem ipsum',
    },
    {
      user_id: 1,

      user_name: 'Breakfast',
      user_desc: 'lorem ipsum',
    },
    {
      user_id: 1,

      user_name: 'Dinner',
      user_desc: 'lorem ipsum',
    },
  ];
  dataSource: any[] = [];
  displayedColumns: any[] = ['user_id', 'user_name', 'user_desc', 'action'];

  constructor() {}

  ngOnInit(): void {
    this.dataSource = this.userList;
  }
}
