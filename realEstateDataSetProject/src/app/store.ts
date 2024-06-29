import { configureStore } from "@reduxjs/toolkit";
import KmeanReducer from "../features/Kmeans/kmeansSlice";
import knnReducer from "../features/Knn/knnSlice";

export const store = configureStore({
    reducer: {
        knn: knnReducer,
        kmean: KmeanReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});

// export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; 