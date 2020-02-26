import * as React from "react";
import MasterView from "./masterview"
import { ViewType } from "./layout"
import DetailView from "./detailview";

interface Props {
    view: ViewType
    onNavigateToDetailView: (view: ViewType) => void
}

export default function ViewContainer(props: Props) {
    if (props.view === "main") {
        return <MasterView onNavigationItemClick={props.onNavigateToDetailView} />
    }
    return <DetailView view={props.view} />
}
