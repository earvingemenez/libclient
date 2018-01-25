import { SigninComponent } from '../components/users/signin/signin.component';
import { PublicView } from '../utils/layout';

let signInState = {
  name  : 'signin',
  url   : '/login',
  views : PublicView(SigninComponent)  
}


export const AuthStates: Object[] = [
  signInState
]