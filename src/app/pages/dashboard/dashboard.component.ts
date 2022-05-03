import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoaderService } from 'src/app/utils/services/loader.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  showFiller: boolean = false;

  constructor(private _router: Router, private _loaderService: LoaderService) {}

  ngOnInit(): void {
    this._loaderService.updateLoader(true);
    setTimeout(() => {
      this._loaderService.updateLoader(false);
    }, 3000);
  }

  logout() {
    localStorage.clear();
    this._router.navigate(['']);
  }
}
