import { createSelector } from "@reduxjs/toolkit";
import { selectValueFilter } from "../filters/selectors";

export const selectContacts = (state) => state.contacts.items;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectValueFilter],
  (contacts, valueFilter) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(valueFilter.toLowerCase())
    );
  }
);

export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;
