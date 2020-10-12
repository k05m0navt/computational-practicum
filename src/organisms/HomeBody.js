import React from "react";
import { Plot } from "../molecules";
import "../styles/HomeBody/styles.css";

function HomeBody(props) {
    return (
        <div className="home_body">
            <Plot title="Plots" />
            <Plot title="Error" />
        </div>
    );
}

export default HomeBody;
