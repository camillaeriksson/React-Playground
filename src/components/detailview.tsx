import React from "react"
import { ViewType } from "./layout"

interface Props {
    view: ViewType
}

export default function DetailView(props: Props) {
    const imageSrc = `../pics/${props.view}.jpg`

    return (
        <div style={style}>
            <img src={imageSrc} />
        </div>
    )
}

const style: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
}