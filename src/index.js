import { React } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router";
import { Routes } from "react-router";
import { Route } from "react-router";
import { Home } from "../Views/Home";

const bodyTag = document.getElementById("bodyTag");
const root = createRoot(bodyTag);
 root.render(
<BrowserRouter>
<Routes>
    <Route />
</Routes>
</BrowserRouter>
);