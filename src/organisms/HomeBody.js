import React from "react";
import { Plot } from "../molecules";
import "../styles/HomeBody/styles.css";

function HomeBody(props) {
    return (
        <div className="home_body">
            <Plot title="Plots" width={1200} height={330}/>
            <Plot title="Error" width={1200} height={330}/>
        </div>
    );
}

export default HomeBody;
