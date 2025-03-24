import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import getApiUrl from "../../getApiUrl";

const apiUrl = getApiUrl()
// Define the type for portfolio items
interface PortfolioItem {

  id: number;
  site_name: string;
  site_url: string;
  git_repo: string;
  site_image: string;
  
}

interface PortfolioState {
  portfolio: PortfolioItem[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}



const initialState: PortfolioState = {
  portfolio: [],
  status: "idle",
  error: null,
};

// Async thunk to fetch portfolio data
export const fetchPortfolio = createAsyncThunk<PortfolioItem[]>(
  "portfolio/fetchPortfolio",
  async () => {
    const response = await axios.get(apiUrl);
    return response.data;
  }
);

const portfolioSlice = createSlice({
  name: "portfolio",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPortfolio.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPortfolio.fulfilled, (state, action: PayloadAction<PortfolioItem[]>) => {
        state.status = "succeeded";
        state.portfolio = action.payload;
      })
      .addCase(fetchPortfolio.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch portfolio";
      });
  },
});

// Selectors
export const selectAllPortfolio = (state: { portfolio: PortfolioState }) => state.portfolio.portfolio;
export const getPortfolioStatus = (state: { portfolio: PortfolioState }) => state.portfolio.status;
export const getPortfolioError = (state: { portfolio: PortfolioState }) => state.portfolio.error;

export default portfolioSlice.reducer;
