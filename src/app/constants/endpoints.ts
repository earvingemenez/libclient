export const API_BASE_URL = 'http://local.test:8000/api/';


/* AUTH ENDPONTS
 */
export class AuthURL {
  public static get API_SIGNIN_URL(): string { return `${API_BASE_URL}users/auth/login/`; };
  public static get API_SIGNUP_URL(): string { return `${API_BASE_URL}users/auth/create/`; };

}

/* USER ENDPOINT
 */
export const API_USER_URL = (): string => `${API_BASE_URL}/users/`; 