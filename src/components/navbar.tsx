import * as React from "react";

interface Props {
    onClickHeader: () => void
}

export default function Navbar(props: Props) {
    return (
        <div style={style}>
            <h1 onClick={props.onClickHeader} style={headingStyle}>
                React Playground
            </h1>
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