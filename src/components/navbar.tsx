import * as React from "react";


export default function Layout() {
    return (
        <div style={style}>
            <h1 style={headingStyle}>React Playground</h1>
        </div>
    )
}

const style = {
    width: "100%",
    height: "5rem",
    background: "black",
    display: "flex",
    alignItems: "center"
}

const headingStyle = {
    marginLeft: "2rem",
    color: "white"
}