import React from "react";
import {
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
} from "recharts";
import "../styles/Plot/styles.css";

function Plot(props) {
    return (
        <div className="plot">
            <h2>{props.title}</h2>
            <LineChart width={props.width} height={props.height} data={props.data}>
                <XAxis />
                <YAxis />
                <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                <Tooltip />
                <Line
                    type="monotone"
                    dataKey={props.firstDataKey}
                    stroke="#8884d8"
                />
                <Line
                    type="monotone"
                    dataKey={props.secondDataKey}
                    stroke="#82ca9d"
                />
                <Line
                    type="monotone"
                    dataKey={props.thirdDataKey}
                    stroke="#993366"
                />
                <Line
                    type="monotone"
                    dataKey={props.fourthDataKey}
                    stroke="#999900"
                />
            </LineChart>
        </div>
    );
}

export default Plot;
