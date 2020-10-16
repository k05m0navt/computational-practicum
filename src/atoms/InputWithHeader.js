import React from "react";
import "../styles/InputWithHeader/styles.css";

function InputWithHeader(props) {
    function handleChanges(val) {
        if (val === "-") {
            console.log("val: ", val);
            props.setValue("-");
        } else props.setValue(parseFloat(val) || 0);
    }

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
                onChange={(val) => handleChanges(val.target.value)}
            />
        </div>
    );
}

export default InputWithHeader;
