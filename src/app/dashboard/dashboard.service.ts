import { Injectable } from '@angular/core';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  userDetails: User | undefined;

  setUserDetails(res: any) {
    this.userDetails = res;
  }
}
