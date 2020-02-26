import * as React from "react";

interface Props {
    text: string,
    image: string
}

export default function SectionItem(props: Props) {
    return (
        <div style={style(props.image)}>
            <p>{props.text}</p>
        </div>
    )
}

const style = function (image: string): React.CSSProperties {
    return {
        display: "flex",
        flexGrow: 1,
        margin: "0.4rem",
        backgroundImage: "url(" + image + ")",
        backgroundSize: "cover",
        backgroundPosition: "center",
        justifyContent: "center",
        alignItems: "center",
        fontWeight: "bolder",
        color: "white",
        letterSpacing: "0.5rem",
        fontSize: "6rem",
        borderRadius: "2rem"
    }
}