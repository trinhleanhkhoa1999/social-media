import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import { postLogin, postRegister } from "../../services/apiService";
import { toast } from "react-toastify";

export const createNewUser = createAsyncThunk(
  "createNewUser",
  async (
    payload: { username: string; email: string; password: string },
    thunkAPI
  ) => {
    // console.log("check payload register: ", payload);
    const data = await postRegister(payload);
    if (data.user) {
      toast.success("Register success ^^ ");
      // console.log("check res from redux register slice: ", data);
      return data;
    } else {
      toast.error("Register fail");
    }
  }
);

export const loginUser = createAsyncThunk(
  "loginUser",
  async (payload: { email: string; password: string }, thunkAPI) => {
    const data = await postLogin(payload);
    console.log("check res from redux ", data);
    try {
      localStorage.setItem("token user", JSON.stringify(data.user.token));
      toast.success("Login success ^^ ");
      return data.user;
    } catch (error) {
      toast.error(`check ${Object.keys(data.errors)[0]}`);
    }
  }
);

export interface IAuth {
  user: {
    username: string;
    email: string;
    password?: string;
    token: string;
    image: string;
  };
  isError: boolean;
  isSuccess: boolean;

  isAuth: boolean;
}

const initialState: IAuth = {
  user: {
    username: "",
    email: "",
    password: "",
    token: "",
    image: "",
  },
  isError: false,
  isSuccess: false,

  isAuth: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(createNewUser.fulfilled, (state: any, action) => {
      // console.log("state reducer: ", state.user);
      // console.log("action reducer: ", action);
      state.user = action.payload;

      state.isSuccess = true;
      state.isError = false;

      state.isAuth = true;
    });
    builder.addCase(loginUser.fulfilled, (state: any, action) => {
      state.user = action.payload;

      state.isSuccess = true;
      state.isError = false;

      state.isAuth = true;
    });
  },
});

// Action creators are generated for each case reducer function
export const {} = userSlice.actions;

export default userSlice.reducer;
