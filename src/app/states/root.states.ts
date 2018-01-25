import * as _ from "lodash";

import { AuthStates } from './auth.states';
import { UserStates } from './user.states';


export const rootStates = _.flattenDeep([
  AuthStates,
  UserStates
]);