import * as React from "react";
import NavigationItem from "./navigationitem"

export default function MainView() {
    return (
        <div style={style}>
            <NavigationItem text="Red" image="../pics/red.jpg" />
            <NavigationItem text="Green" image="../pics/green.jpg" />
            <NavigationItem text="Blue" image="../pics/blue.jpg" />
        </div>
    )
}

const style: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
}