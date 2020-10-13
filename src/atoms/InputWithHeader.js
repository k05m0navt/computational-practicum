import React from "react";
import "../styles/InputWithHeader/styles.css";

function InputWithHeader(props) {
    return (
        <div className="input-group input-group-sm mb-3">
            <div className="input-group-prepend">
                <span className="input-group-text" id="inputGroup-sizing-sm">
                    {props.title}
                </span>
            </div>
            <input
                className="form-control"
                aria-label={props.title}
                aria-describedby="inputGroup-sizing-sm"
                type="text"
                value={props.value}
                onChange={(val) => props.setValue(val.target.value)}
            />
        </div>
    );
}

export default InputWithHeader;
