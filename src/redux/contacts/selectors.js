import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;
export const selectFilterStatus = state => state.filter.value;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilterStatus],
  (contacts, filterValue) => {
    return contacts.filter(({ name }) => {
      const normalizedName = name.toLowerCase();
      return normalizedName.includes(filterValue);
    });
  }
);
