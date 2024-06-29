import { PayloadAction, createSlice } from "@reduxjs/toolkit";
//types
import { PropertyData } from '../../types/PropertData';

interface InitialState {
    clusters: PropertyData[][],
    centroidsIds: number[],
}

const initialState: InitialState = {
    clusters: [],
    centroidsIds: [],
};


const kmeanSlice = createSlice({
    name: "kmean",
    initialState,
    reducers: {
        getKmeanData: (state, action: PayloadAction<InitialState>) => {
            state.clusters = action.payload.clusters;
            state.centroidsIds = action.payload.centroidsIds;
        },
    },
});

export default kmeanSlice.reducer;
export const { getKmeanData } = kmeanSlice.actions;
