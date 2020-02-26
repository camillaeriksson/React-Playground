import * as React from "react"
import Navbar from "./navbar"
import ViewContainer from "./viewcontainer"

interface State {
    view: ViewType
}

interface Props {

}

export type ViewType = "main" | "red" | "green" | "blue"

export default class Layout extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            view: "main"
        }
    }

    navigateToMain = () => {
        this.setState({ view: "main" })
    }

    navigateToDetailView = (view: ViewType) => {
        this.setState({ view: view as any })
    }

    render() {
        console.log(this.state.view)

        return (
            <div style={style}>
                <Navbar onClickHeader={this.navigateToMain} />
                <ViewContainer view={this.state.view} onNavigateToDetailView={this.navigateToDetailView} />
            </div>
        )
    }
}

const style: React.CSSProperties = {
    display: "flex",
    height: "100%",
    flexDirection: "column"
}



// export class App2 extends React.Component<Props> {
//     render() {
//         const {compiler, framework} = this.props //deconstruct
//         return (
//             <div>
//                 <h1>Hello from {compiler} and {framework}!</h1>
//             </div>
//         )
//     }
// }