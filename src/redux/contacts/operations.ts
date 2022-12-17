import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { APIError, Contact, AddContact } from './interfaces';

export const fetchContacts = createAsyncThunk<Contact[], undefined>(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts', {
        signal: thunkAPI.signal,
      });
      return response.data;
    } catch (error) {
      const result = error as APIError;
      return thunkAPI.rejectWithValue(result.message);
    }
  }
);

export const addContact = createAsyncThunk<Contact, AddContact>(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', contact);
      return response.data;
    } catch (error) {
      const result = error as APIError;
      thunkAPI.rejectWithValue(result.message);
    }
  }
);

export const editContact = createAsyncThunk<Contact, Contact>(
  'contacts/editContact',
  async ({ id, name, number }, thunkAPI) => {
    try {
      const response = await axios.patch(`/contacts/${id}`, { name, number });
      return response.data;
    } catch (error) {
      const result = error as APIError;
      thunkAPI.rejectWithValue(result.message);
    }
  }
);
export const deleteContact = createAsyncThunk<Contact, string>(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (error) {
      const result = error as APIError;
      return thunkAPI.rejectWithValue(result.message);
    }
  }
);
