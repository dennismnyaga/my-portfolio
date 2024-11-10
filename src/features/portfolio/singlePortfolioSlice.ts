import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

// Define the type for portfolio items
interface PortfolioItem {
  id: number;
  site_name: string;
  site_url: string;
  git_repo: string;
  site_image: string;
  stacks: {
    stack_name: string;
  };
  state_of_project: string;
  description: string;
}

// Define the state structure for a single portfolio
interface SinglePortfolioState {
  singlePortfolio: PortfolioItem | null; // Assuming this should be a single object, not an array
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

// const PORTFOLIO_URL = "https://joyce1.pythonanywhere.com/portfolio";
const PORTFOLIO_URL = "http://127.0.0.1:8000/portfolio";

const initialState: SinglePortfolioState = {
  singlePortfolio: null, // Changed from array to single object or null
  status: "idle",
  error: null,
};

// Async thunk to fetch a single portfolio by ID
export const fetchSinglePortfolio = createAsyncThunk<PortfolioItem, number>(
  "portfolio/fetchSinglePortfolio",
  async (portfolioID) => {
    const response = await axios.get(`${PORTFOLIO_URL}/${portfolioID}/`);
    return response.data;
  }
);

const singlePortfolioSlice = createSlice({
  name: "singlePortfolio",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSinglePortfolio.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchSinglePortfolio.fulfilled, (state, action: PayloadAction<PortfolioItem>) => {
        state.status = "succeeded";
        state.singlePortfolio = action.payload;
      })
      .addCase(fetchSinglePortfolio.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch portfolio";
      });
  },
});

// Selectors
export const selectSinglePortfolio = (state: { singlePortfolio: SinglePortfolioState }) => state.singlePortfolio.singlePortfolio;
export const getSinglePortfolioStatus = (state: { singlePortfolio: SinglePortfolioState }) => state.singlePortfolio.status;
export const getSinglePortfolioError = (state: { singlePortfolio: SinglePortfolioState }) => state.singlePortfolio.error;

export default singlePortfolioSlice.reducer;
