import * as React from "react";
import SectionItem from "./sectionitem"

export default function Content() {
    return (
        <div style={style}>
            <SectionItem text="Red" image="../pics/red.jpg" />
            <SectionItem text="Green" image="../pics/green.jpg" />
            <SectionItem text="Blue" image="../pics/blue.jpg" />
        </div>
    )
}

const style: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
}