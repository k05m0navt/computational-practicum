import React from "react";
import { Link } from "react-router-dom";

function ButtonForRoute(props) {
    return (
        <div className="button_for_route">
            <Link to={props.to}>
                <button type="button" class={props.buttonClass}>
                    {props.text}
                </button>
            </Link>
        </div>
    );
}

export default ButtonForRoute;
