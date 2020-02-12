import * as React from "react";

interface Props {
    compiler: string;
    framework: string;
};

export default function App(props: Props) {
    return (
        <div>
            <h1>Hello from {props.compiler} and {props.framework}!</h1>
        </div>
    )
}

// export class App2 extends React.Component<Props> {
//     render() {
//         return (
//             <div>
//                 <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>
//             </div>
//         )
//     }
// }