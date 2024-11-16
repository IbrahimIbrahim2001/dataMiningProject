//react router
import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

//pages
import KmeansFormPage from "./pages/KmeansForm.page";
import KmeansResultsPage from "./pages/KmeansResults.page";
import KnnFormPage from "./pages/KnnForm.page";
import KnnResultsPage from "./pages/KnnResults.page";
import NotFoundRoutePage from "./pages/NotFoundRoute.page";
import RealEstatePage from "./pages/RealEstate.page";
import AddNewPropertyFormPage from "./pages/AddNewPropertyForm.page";

//layouts
import HomeLayout from "./layouts/HomeLayout";

const routes = createRoutesFromElements(
    <Route element={<HomeLayout />}>
        <Route index element={<RealEstatePage />} />
        <Route path="knn-form" element={<KnnFormPage />} />
        <Route path="kmeans-form" element={<KmeansFormPage />} />
        <Route path="knn-results" element={<KnnResultsPage />} />
        <Route path="kmeans-results" element={<KmeansResultsPage />} />
        <Route path="add-form" element={<AddNewPropertyFormPage />} />
        <Route path="*" element={<NotFoundRoutePage />} />
    </Route>
)

export const router = createBrowserRouter(routes);