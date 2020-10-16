import React from "react";
import { Plot } from "../molecules";
import "../styles/ErrorBody/styles.css";

function ErrorBody(props) {
    return (
        <div className="error_body">
            <Plot
                title="Max error"
                width={1200}
                height={700}
                data={props.data}
                firstDataKey="uv"
                secondDataKey="pv"
                thirdDataKey="amt"
            />
        </div>
    );
}

export default ErrorBody;
