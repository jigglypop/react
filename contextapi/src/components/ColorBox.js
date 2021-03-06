import React from "react";
import ColorContext from "../contexts/Color";

export default function ColorBox() {
    return (
        <ColorContext.Consumer>
            {(value) => (
                <div
                    style={{
                        width: "64px",
                        height: "64px",
                        background: value.color,
                    }}
                />
            )}
        </ColorContext.Consumer>
    );
}
