const { createSlice } = require("@reduxjs/toolkit");

const getStartedSlice = createSlice({
    name: "get-started",
    initialState:{
        isOpen:false
    },
    reducers: {
        toggleOpen(state){
            state.isOpen=!state.isOpen;
        }
    }
});

export const {toggleOpen} = getStartedSlice.actions;
export default getStartedSlice.reducer;