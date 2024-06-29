import { PayloadAction, createSlice } from "@reduxjs/toolkit";

//types
import { PropertyData } from '../../types/PropertData';


interface InitialState {
    data: PropertyData[],
}

const initialState: InitialState = {
    data: [],
};


const knnSlice = createSlice({
    name: "knn",
    initialState,
    reducers: {
        getKnnData: (state, action: PayloadAction<PropertyData[]>) => {
            state.data = action.payload;
        },
    },
});

export default knnSlice.reducer;
export const { getKnnData } = knnSlice.actions;
