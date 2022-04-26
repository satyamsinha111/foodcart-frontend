import { Component } from '@angular/core';
import { LoaderService } from './utils/services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isLoading: boolean = false;
  constructor(private _loaderService: LoaderService) {}
  ngOnInit() {
    this._loaderService.isLoading.subscribe((data) => {
      this.isLoading = data;
    });
  }
}
