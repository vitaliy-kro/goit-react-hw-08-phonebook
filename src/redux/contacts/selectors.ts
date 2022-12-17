import { createSelector } from '@reduxjs/toolkit';
import { IState } from '../state.interface';
import { Contact } from './interfaces';

export const selectContacts = (state: IState) => state.contacts.items;
export const selectFilterStatus = (state: IState) => state.filter.value;
export const selectIsLoading = (state: IState) => state.contacts.isLoading;
export const selectError = (state: IState) => state.contacts.error;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilterStatus],
  (contacts: Contact[], filterValue: string) => {
    return contacts.filter(({ name }) => {
      const normalizedName = name.toLowerCase();
      return normalizedName.includes(filterValue.toLowerCase());
    });
  }
);
