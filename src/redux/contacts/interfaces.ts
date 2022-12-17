export interface APIError {
  message: string;
}
export interface AddContact {
  name: string;
  number: string;
}
export interface Contact {
  id: string;
  name: string;
  number: string;
}

export interface ContactsState {
  items: Contact[];
  isLoading: boolean;
  error: string | null | unknown;
}

export interface FilterState {
  value: string;
}
