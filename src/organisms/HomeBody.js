import React from "react";
import { Plot } from "../molecules";
import "../styles/HomeBody/styles.css";

function HomeBody(props) {
    return (
        <div className='home_body'>
            <Plot
                title='Plots'
                width={1200}
                height={330}
                data={props.data}
                axisX={props.axisX}
                firstDataKey={props.firstDataKey}
                secondDataKey={props.secondDataKey}
                thirdDataKey={props.thirdDataKey}
                fourthDataKey={props.fourthDataKey}
            />
            <Plot
                title='Error'
                width={1200}
                height={330}
                data={props.error}
                axisX={props.axisX}
                firstDataKey={props.firstDataKey}
                secondDataKey={props.secondDataKey}
                thirdDataKey={props.thirdDataKey}
                fourthDataKey={props.fourthDataKey}
            />
        </div>
    );
}

export default HomeBody;
