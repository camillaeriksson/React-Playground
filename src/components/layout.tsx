import * as React from "react";
import MainView from "./mainview";
import Navbar from "./navbar";

interface State {
    view: "main" | "red" | "green" | "blue"
}

interface Props {

}



export default class Layout extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            view: "main"
        }

    }

    render() {
        return (
            <div style={style}>
                <Navbar />
                <MainView />
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