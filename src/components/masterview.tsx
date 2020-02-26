import React from "react"
import NavigationItem from "./navigationitem"
import { ViewType } from "./layout"

interface Props {
    onNavigationItemClick: (view: ViewType) => void
}

export default function MasterView(props: Props) {
    const sectionIds: ViewType[] = ["red", "green", "blue"]

    return (
        <div style={style}>
            {sectionIds.map(value => (
                <NavigationItem view={value} onClick={props.onNavigationItemClick} />
            ))}

        </div>
    )
}

const style: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
}