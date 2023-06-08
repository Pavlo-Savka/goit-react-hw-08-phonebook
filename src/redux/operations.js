import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async (_, thunkAPI) => {
    try {
        const response = await axios.get('/contacts');
     //   console.log(response.data);
        return response.data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    };
});

export const addContact = createAsyncThunk('contacts/addContact', async (arg, thunkAPI) => {
    try {
        const response = await axios.post('/contacts', arg);
      //  console.log(response.data);
        return response.data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
});

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (arg, thunkAPI) => {
    try {
        const response = await axios.delete(`/contacts/${arg}`);
    //    console.log(response);
        return response.data
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
});