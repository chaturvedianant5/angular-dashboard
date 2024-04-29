import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { User } from '../user';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dasboard',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  userDetails: User | undefined = this.dashboardService.userDetails;

  constructor(private dashboardService: DashboardService) {}
  
  
}
