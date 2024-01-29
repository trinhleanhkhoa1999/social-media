import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllArticles, postArticles } from "../../services/apiService";

export const fetchListArticles = createAsyncThunk(
  "fetchListArticles",
  async (userId, thunkAPI) => {
    const data = await getAllArticles();
    console.log("check res from redux : ", data);
    return data;
  }
);
export const createNewArticles = createAsyncThunk(
  "createNewArticles",
  async (payload: string, thunkAPI) => {
    console.log("check payload: ", payload);
    // const data = await postArticles(payload);
    // console.log("check res from redux createNewArticles: ", data);
    // return data;
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
  isShowHideModalAddNew: boolean;
  value: {
    title: string;
    body: string;
  };
}

const initialState: IArticle = {
  articles: [],
  articlesCount: 0,
  isShowHideModal: false,
  isShowHideModalAddNew: false,
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
    showModalAddNew: (state) => {
      state.isShowHideModalAddNew = true;
    },
    hideModalAddNew: (state) => {
      state.isShowHideModalAddNew = false;
    },
    //use for component modal =>> show a articles
    getValue: (state, actions) => {
      state.value = actions.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchListArticles.fulfilled, (state, action) => {
      state.articles = action.payload.articles;
    });
  },
});

// Action creators are generated for each case reducer function
export const {
  showModal,
  hideModal,
  getValue,
  hideModalAddNew,
  showModalAddNew,
} = articlesSlice.actions;

export default articlesSlice.reducer;
