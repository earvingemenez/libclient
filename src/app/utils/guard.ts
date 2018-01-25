import { AuthService } from '../commons/services/auth/auth.service';

export function LoginRequired (trans) {
  let auth = trans.injector().get(AuthService);

  if ( !auth.isAuthenticated() ) {
    return trans.router.stateService.target('signin');
  }
}