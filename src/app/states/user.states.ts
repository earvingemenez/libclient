import { DashboardComponent } from '../components/users/dashboard/dashboard.component';
import { AuthenticatedView } from '../utils/layout';
import { AuthService } from '../commons/services/auth/auth.service';

import { LoginRequired } from '../utils/guard';


let dashboardState = {
  name    : 'dashboard',
  url     : '/dashboard',
  views   : AuthenticatedView(DashboardComponent),
  onEnter : LoginRequired
}


export const UserStates : Object[] = [
  dashboardState
]