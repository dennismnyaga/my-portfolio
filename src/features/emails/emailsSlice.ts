import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import getApiUrl from "../../getApiUrl";

const apiUrl = getApiUrl()
// Define the type for email items
interface Email {
    name: string;
    email: string;
    message: string;
  
}

interface EmailState {
  email: Email[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}



const initialState: EmailState = {
  email: [],
  status: "idle",
  error: null,
};

// Async thunk to fetch email data
export const postEmail = createAsyncThunk<Email, { name: string; email: string; message: string }>(
  "email/postEmail",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${apiUrl}/email/`, formData);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || "Something went wrong");
    }
  }
);

const emailsSlice = createSlice({
  name: "email",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postEmail.pending, (state) => {
        state.status = "loading";
      })
      .addCase(postEmail.fulfilled, (state, action: PayloadAction<Email>) => {
        state.status = "succeeded";
        state.email.push(action.payload);
      })
      .addCase(postEmail.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch email";
      });
  },
});

// Selectors
export const selectAllEmail = (state: { email: EmailState }) => state.email.email;
export const getEmailStatus = (state: { email: EmailState }) => state.email.status;
export const getEmailError = (state: { email: EmailState }) => state.email.error;

export default emailsSlice.reducer;
