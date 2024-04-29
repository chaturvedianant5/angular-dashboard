import { Component, Input, inject } from '@angular/core';
import { User } from '../user';
import { HomeService } from './home.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  @Input() user!: User;
  homeService: HomeService = inject(HomeService);
}
