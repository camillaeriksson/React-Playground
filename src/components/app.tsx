import * as React from "react";

interface Props {
    compiler: string;
    framework: string;
};

export default function App(props: Props) {
    return (
        <div style={style}>
            <h1>Hello from {props.compiler} and {props.framework}!</h1>
        </div>
    )
}

const centeredContent: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh"
}

const theme: React.CSSProperties = {
    color: "green"
}

const style = { ...centeredContent, ...theme }

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