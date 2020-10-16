import React from "react";

function Button(props) {
    return (
        <button
            type="button"
            className={props.buttonClass}
            onClick={() => props.setClick((prevClick) => !prevClick)}
        >
            {props.text}
        </button>
    );
}

export default Button;
