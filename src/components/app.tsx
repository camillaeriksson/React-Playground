import * as React from "react";
import Layout from "./layout";
import { BrowserRouter } from "react-router-dom"

export default function App() {
    return (
        <BrowserRouter>
            <Layout />
        </BrowserRouter>
    )
}