import { Injectable } from '@angular/core';
import { User } from '../user';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient,
    private router: Router) { }

  createUser(user: User) {
    const basicAuth = btoa(user.email + ':' + user.password);
    const headers = {
      'Authorization': 'Basic ' + basicAuth
    };
    this.http.post('http://127.0.0.1:3000/signup', user, { headers })
      .subscribe((res: any) => {

      console.log(res);
      alert('Registration Success! '
        + 'You will be navigated to '
        + 'home page for login');

      this.router.navigateByUrl('/');
    }, (err: any) => {
      console.log(err);
      alert('Registration Failed! Please try again. '
        + 'You will be navigated to home page.');

      this.router.navigateByUrl('/');
    });
  }
}
