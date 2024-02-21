import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { postUser } from "../../services/apiService";
import { toast } from "react-toastify";

export const createNewUser = createAsyncThunk(
  "createNewUser",
  async (
    payload: { username: string; email: string; password: string },
    thunkAPI
  ) => {
    console.log("check payload register: ", payload);
    const data = await postUser(payload);
    if (data.user) {
      toast.success("Register success ^^ ");
      console.log("check res from redux register slice: ", data);
      return data;
    } else {
      toast.error("Register fail");
    }
  }
);

export interface IAuth {
  user: {
    username: string;
    email: string;
    password: string;
  };
}

const initialState: IAuth = {
  user: {
    username: "",
    email: "",
    password: "",
  },
};

const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function
export const {} = registerSlice.actions;

export default registerSlice.reducer;
