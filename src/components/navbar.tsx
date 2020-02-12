import * as React from "react";


export default function Layout() {
    return (
        <div style={header}>
            <h1 style={headerHeading}>React Playground</h1>
        </div>
    )
}

const header = {
    width: "100vw",
    height: "8vh",
    background: "black",
    display: "flex",
    alignItems: "center"
}

const headerHeading = {
    marginLeft: "2rem",
    color: "white"
}