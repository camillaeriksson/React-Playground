import * as React from "react";
import Content from "./content";
import Navbar from "./navbar";


export default function Layout() {
    return (
        <div>
            <Navbar />
            <Content />
        </div>
    )
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