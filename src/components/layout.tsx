import * as React from "react";
import MainView from "./mainview";
import Navbar from "./navbar";


export default function Layout() {
    return (
        <div style={style}>
            <Navbar />
            <MainView />
        </div>
    )
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