import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/utils/common.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  orders: Order[] = [
    {
      orderid: '1',
      item: 'Biryani',
      price: 30,
      date: new Date(),
    },
    {
      orderid: '2',
      item: 'Chicken chap',
      price: 40,
      date: new Date(),
    },
    {
      orderid: '3',
      item: 'Mutton Kulcha',
      price: 50,
      date: new Date(),
    },
    {
      orderid: '4',
      item: 'Idly sambhar',
      price: 60,
      date: new Date(),
    },
    {
      orderid: '5',
      item: 'Rumali roti',
      price: 70,
      date: new Date(),
    },
  ];

  orderTableColumns: string[] = ['orderid', 'item', 'price', 'date'];

  constructor() {}

  ngOnInit(): void {}
}
