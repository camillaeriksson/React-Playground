import React, { CSSProperties } from "react";
import { ViewType } from "./layout"

interface Props {
    view: ViewType
    onClick: (view: ViewType) => void
}

export default function NavigationItem(props: Props) {
    const imageSrc = `../pics/${props.view}.jpg`

    const onClick = () => props.onClick(props.view)

    return (
        <div onClick={onClick} style={style}>
            <img src={imageSrc} style={picstyle} />
            <p style={textstyle}>{props.view}</p>
        </div>
    )
}

const style: CSSProperties = {
    width: "100%",
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center"
}

const picstyle: CSSProperties = {
    width: "100%"
}

const textstyle: CSSProperties = {
    position: "absolute",
    color: "white",
    fontSize: "4rem",
    letterSpacing: "0.4rem",
    fontWeight: "bold"
}