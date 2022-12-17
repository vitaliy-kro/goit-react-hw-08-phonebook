import { AuthState } from './auth/operations.interface';
import { ContactsState, FilterState } from './contacts/interfaces';

export interface IState {
  auth: AuthState;
  contacts: ContactsState;
  filter: FilterState;
}
