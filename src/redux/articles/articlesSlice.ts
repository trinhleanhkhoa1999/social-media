import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllArticles } from "../../services/apiService";

export const fetchListArticles = createAsyncThunk(
  "fetchListArticles",
  async (userId, thunkAPI) => {
    const data = await getAllArticles();
    console.log("check res from redux : ", data);
    return data;
  }
);

export interface IArticle {
  articles: {
    slug: string;
    title: string;
    description: string;
    body: string;
    tagList: string[];
    favorited: boolean;
    favoritesCount: 0;
    author: {
      username: string;
      bio: string;
      image: string;
      following: boolean;
    };
  }[];
  articlesCount: number;
  isShowHideModal: boolean;
  value: {
    title: string;
    body: string;
  };
}

const initialState: IArticle = {
  articles: [],
  articlesCount: 0,
  isShowHideModal: false,
  value: {
    title: "",
    body: "",
  },
};

const articlesSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {
    showModal: (state) => {
      state.isShowHideModal = true;
    },
    hideModal: (state) => {
      state.isShowHideModal = false;
    },
    //use for component modal =>> show a articles
    getValue: (state, actions) => {
      state.value = actions.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchListArticles.fulfilled, (state, action) => {
      // Add user to the state array
      // console.log("check action", action.payload);
      state.articles = action.payload.articles;
    });
  },
});

// Action creators are generated for each case reducer function
export const { showModal, hideModal, getValue } = articlesSlice.actions;

export default articlesSlice.reducer;
