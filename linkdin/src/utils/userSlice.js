import { createSlice } from "@reduxjs/toolkit";

const user = createSlice({
    name: "user",
    initialState: null,
    reducers: {
        setUser: (state, action) => {
            return action.payload
        },
        removeUser: (state, action) => {
            return null
        }
    }
})

export const { setUser, removeUser } = user.actions
export default user.reducer