import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DashboardService } from '../dashboard/dashboard.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private http: HttpClient,
    private router: Router,
    private dashboardService: DashboardService) {}

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  login() {
    const email =  this.loginForm.value.email ?? '';
    const password = this.loginForm.value.password ?? '';
    const basicAuth = btoa(email + ':' + password);
    const headers = {
      'Authorization': 'Basic ' + basicAuth
    };
    this.http.post('http://127.0.0.1:3000/auth/signin', null, { headers })
      .subscribe((res: any) => {

      console.log(res);
      // alert('Login Success! '
      //   + 'You will be navigated to '
      //   + 'home page for login');

      this.navigateToDashboard(res.access_token);
    }, (err: any) => {
      console.log(err);
      alert('Login Failed! Please try again. '
        + 'You will be navigated to home page.');

      this.router.navigateByUrl('/');
    });
  }

  navigateToDashboard(token: string) {
    console.log('token ' + token);
    const headers = {
      'Authorization': 'Bearer ' + token
    };
    this.http.get('http://127.0.0.1:3000/dashboard', { headers })
      .subscribe((res: any) => {

      console.log(res);
      this.dashboardService.setUserDetails(res);
      this.router.navigateByUrl('dashboard');
    });
  }
}
