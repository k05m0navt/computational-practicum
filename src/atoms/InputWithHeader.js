import React from "react";
import "../styles/InputWithHeader/styles.css";

function InputWithHeader(props) {
    return (
        <div class="input-group input-group-sm mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroup-sizing-sm">
                    {props.title}
                </span>
            </div>
            <input
                class="form-control"
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
