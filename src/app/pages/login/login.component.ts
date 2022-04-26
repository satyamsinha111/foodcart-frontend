import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/utils/services/api.service';
import { LoaderService } from 'src/app/utils/services/loader.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({});

  constructor(
    private _loaderService: LoaderService,
    private _apiService: ApiService,
    private _router: Router,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  onSubmit(ev: any) {
    this._loaderService.updateLoader(true);
    this._apiService.login(this.loginForm.value).subscribe(
      (result: any) => {
        this._snackBar.open(result.body.message, 'OK', {
          horizontalPosition: 'end',
          verticalPosition: 'top',
        });
        localStorage.setItem('token', result.body.token);
        this._router.navigate(['dashboard']);
      },
      (error) => {
        console.log('error', error);
        this._snackBar.open(error.error.message, 'OK', {
          horizontalPosition: 'end',
          verticalPosition: 'top',
        });
        this._loaderService.updateLoader(false);
      },
      () => {
        this._loaderService.updateLoader(false);
      }
    );
  }
}
